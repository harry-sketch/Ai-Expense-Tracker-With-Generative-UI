import { END, MemorySaver, START, StateGraph } from "@langchain/langgraph";
import { toolsNode } from "../utils/toolsNode.ts";
import { shouldContinue, shouldCotinuefromToolNode } from "./edges.ts";
import { agentNode } from "./nodes/agentNode.ts";
import { stateAnnotations } from "./state.ts";

const checkpointer = new MemorySaver();

const graph = new StateGraph(stateAnnotations)
  .addNode("agent_node", agentNode)
  .addNode("tool_node", toolsNode)
  .addEdge(START, "agent_node")
  .addConditionalEdges("agent_node", shouldContinue, {
    tool_node: "tool_node",
    end: END,
  })
  .addConditionalEdges("tool_node", shouldCotinuefromToolNode, {
    agent_node: "agent_node",
    // end: END,
  });

export const app = graph.compile({
  checkpointer,
});
