import cors from "cors";
import express from "express";
import { runWorkflow } from "../graph/run.workflow.ts";

export const createExpressServer = () => {
  const app = express();

  app.use(cors(), express.json());

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "OK",
    });
  });

  app.post("/chat", async (req, res) => {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Missing Credentials",
      });
    }

    res.writeHead(200, {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive",
    });

    const streams = await runWorkflow(question);

    if (streams) {
      for await (const [eventType, chunk] of streams) {
        const message = {
          type: "ai",
          payload: chunk[0].content ?? "",
        };

        res.write(`Event: ${eventType}\n`);
        res.write(`data: ${JSON.stringify(message)}\n\n`);
      }
    }

    res.end();
  });

  return app;
};
