import { HumanMessage } from "@langchain/core/messages";
import { app } from "./workflow.ts";

export const runWorkflow = async (question: string, thread_id: string) => {
  try {
    const streams = await app.stream(
      {
        messages: new HumanMessage(question),
      },
      {
        streamMode: ["messages"],
        configurable: {
          // TODO: -> will Genrate from frontend
          thread_id,
        },
      },
    );

    return streams;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
