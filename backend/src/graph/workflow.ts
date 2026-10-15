import { StateGraph } from "@langchain/langgraph";
import { toolsNode } from "../utils/toolsNode.ts";
import { shouldContinue, shouldCotinuefromToolNode } from "./edges.ts";
import { agentNode } from "./nodes/agentNode.ts";
import { stateAnnotations } from "./state.ts";

new StateGraph(stateAnnotations)
  .addNode("agent_node", agentNode)
  .addNode("tool_node", toolsNode)
  .addEdge("__start__", "agent_node")
  .addConditionalEdges("agent_node", shouldContinue, {
    tool_node: "tool_node",
    emd: "__end__",
  })
  .addConditionalEdges("tool_node", shouldCotinuefromToolNode, {
    agent_node: "agent_node",
    end: "__end__",
  });
