import type { AIMessage, ToolMessage } from "@langchain/core/messages";
import type { TStateType } from "../types/index.ts";

export const shouldContinue = (state: TStateType) => {
  const aiMsg = state.messages.at(-1) as AIMessage;

  if (aiMsg && (aiMsg.tool_calls ?? [])?.length > 0) {
    return "tool_node";
  }

  return "end";
};

export const shouldCotinuefromToolNode = (state: TStateType) => {
  const toolsMsg = state.messages.at(-1) as ToolMessage;

  const content = toolsMsg.content;

  const data = JSON.parse(content as string);

  if (data.type === "chart") {
    return "end";
  }

  return "agent_node";
};
