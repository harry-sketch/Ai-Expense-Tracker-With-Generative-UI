import cors from "cors";
import express from "express";

export const createExpressServer = () => {
  const app = express();

  app.use(cors(), express.json());

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "OK",
    });
  });

  app.post("/chat", (req, res) => {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Missing Credentials",
      });
    }

    console.log({ question });

    res.writeHead(200, {
      "content-type": "text/event-stream",
    });

    setInterval(() => {
      res.write("event: Harsh\n");
      res.write(`data: ${question}\n\n`);
    }, 1000);
  });

  return app;
};
