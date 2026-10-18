import { HumanMessage } from "@langchain/core/messages";
import { app } from "./workflow.ts";

export const runWorkflow = async (question: string, thread_id: string) => {
  try {
    const resp = await app.invoke(
      {
        messages: new HumanMessage(question),
      },
      {
        configurable: {
          thread_id,
        },
      },
    );

    const content = resp.messages.at(-1)?.content;

    return content;
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
