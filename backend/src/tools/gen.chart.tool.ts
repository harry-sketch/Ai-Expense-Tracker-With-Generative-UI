import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";

export const genChartTool = tool(() => {}, {
  name: "",
  description: "",
  schema: z.object(),
});
