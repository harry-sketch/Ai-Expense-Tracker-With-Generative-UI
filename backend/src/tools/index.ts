import { ToolNode } from "@langchain/langgraph/prebuilt";
import { addExpenseTool } from "./add.expense.tool.ts";
import { genChartTool } from "./gen.chart.tool.ts";
import { getExpenseTool } from "./get.expense.tool.ts";

export const tools = [getExpenseTool, genChartTool, addExpenseTool];

export const toolsNode = new ToolNode(tools);
