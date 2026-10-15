import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const addExpenseTool = tool(
  ({ amount, title }) => {
    try {
      console.log({ title, amount });

      return JSON.stringify([{ status: "success¡" }]);
    } catch (error) {
      console.log(
        "Something went wrong while adding expense to database",
        error,
      );
    }
  },
  {
    name: "add_expense",
    description: "add the given expense to database",
    schema: z.object({
      title: z.string().describe("The expense title"),
      amount: z.number().describe("The Amount spent"),
    }),
  },
);
