import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const getExpenseTool = tool(() => {}, {
  name: "",
  description: "",
  schema: z.object({}),
});
