import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const addExpenseTool = tool(() => {}, {
  name: "",
  description: "",
  schema: z.object(),
});
