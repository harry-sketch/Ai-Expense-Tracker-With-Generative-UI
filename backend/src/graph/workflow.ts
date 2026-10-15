import { StateGraph } from "@langchain/langgraph";
import { shouldContinue, shouldCotinuefromToolNode } from "./edges.ts";
import { agentNode } from "./nodes/agentNode.ts";
import { toolNode } from "./nodes/toolNode.ts";
import { stateAnnotations } from "./state.ts";

new StateGraph(stateAnnotations)
  .addNode("agent_node", agentNode)
  .addNode("tool_node", toolNode)
  .addEdge("__start__", "agent_node")
  .addConditionalEdges("agent_node", shouldContinue, {
    tool_node: "tool_node",
    emd: "__end__",
  })
  .addConditionalEdges("tool_node", shouldCotinuefromToolNode, {
    agent_node: "agent_node",
    end: "__end__",
  });
