import type { DatabaseSync } from "node:sqlite";
import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const toolsWithdb = (db: DatabaseSync) => {
  const getExpenseTool = tool(() => {}, {
    name: "get_expense",
    description: "query the expense from database",
    schema: z.object({}),
  });

  const genChartTool = tool(() => {}, {
    name: "generate_chart",
    description: "",
    schema: z.object(),
  });

  const addExpenseTool = tool(
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

  return [getExpenseTool, genChartTool, addExpenseTool];
};
