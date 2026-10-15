import type { AIMessage } from "@langchain/core/messages";
import type { TStateType } from "../types/index.ts";

export const shouldContinue = (state: TStateType) => {
  const aiMsg = state.messages.at(-1) as AIMessage;

  if (aiMsg && (aiMsg.tool_calls ?? [])?.length > 0) {
    return "tool_node";
  }

  return "end";
};

export const shouldCotinuefromToolNode = (state: TStateType) => {
  // const aiMsg = state.messages.at(-1) as AIMessage;

  // if (aiMsg && (aiMsg.tool_calls ?? [])?.length > 0) {
  //   return "agent_node";
  // }

  return "agent_node";
};
