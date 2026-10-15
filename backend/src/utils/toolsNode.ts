import { ToolNode } from "@langchain/langgraph/prebuilt";
import { createDbAgent } from "./utils.ts";

const { tools } = createDbAgent();

export const toolsNode = new ToolNode(tools);
