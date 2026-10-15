import { tool } from "langchain";
import { z } from "zod/v4";

export const genChartTool = tool(() => {}, {
  name: "generate_chart",
  description: "",
  schema: z.object(),
});
