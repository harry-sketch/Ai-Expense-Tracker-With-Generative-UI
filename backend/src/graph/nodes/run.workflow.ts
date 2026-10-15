import { HumanMessage } from "@langchain/core/messages";
import { app } from "../workflow.ts";

export const runWorkflow = async () => {
  try {
    const resp = await app.invoke(
      {
        messages: new HumanMessage(
          "Can you visualise how much i have spent this year group by month ?",
        ),
      },
      {
        configurable: {
          thread_id: "1",
        },
      },
    );

    console.log({ resp });
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
