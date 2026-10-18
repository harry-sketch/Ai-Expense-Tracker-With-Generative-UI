import cors from "cors";
import express from "express";
import { runWorkflow } from "../graph/run.workflow.ts";
import type { TStreamMessageType } from "../types/index.ts";

export const createExpressServer = () => {
  const app = express();

  app.use(cors(), express.json());

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "OK",
    });
  });

  app.post("/chat", async (req, res) => {
    const { question, thread_id } = req.body;

    if (!question || !thread_id) {
      return res.status(400).json({
        message: "Missing Credentials",
      });
    }

    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive",
    });

    const streams = await runWorkflow(question, thread_id);

    if (streams) {
      for await (const [eventType, chunk] of streams) {
        let message: TStreamMessageType = {} as TStreamMessageType;

        if (eventType === "custom") {
          message = chunk;
        } else if (eventType === "messages") {
          const payloadType = chunk[0].type;

          if (payloadType === "ai") {
            if (chunk[0].content === "") continue;
            message = {
              type: "ai",
              payload: {
                text: (chunk[0].content ?? "") as string,
              },
            };
          }
        }

        res.write(`Event: ${eventType}\n`);
        res.write(`data: ${JSON.stringify(message)}\n\n`);
      }
    }

    res.end();
  });

  return app;
};
