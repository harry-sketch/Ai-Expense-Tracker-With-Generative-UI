import { tool } from "langchain";
import { z } from "zod/v4";

export const getExpenseTool = tool(() => {}, {
  name: "get_expense",
  description: "query the expense from database",
  schema: z.object({}),
});
