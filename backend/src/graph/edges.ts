import type { AIMessage, ToolMessage } from "@langchain/core/messages";
import type { LangGraphRunnableConfig } from "@langchain/langgraph";
import type { TStateType, TStreamMessageType } from "../types/index.ts";

export const shouldContinue = (
  state: TStateType,
  config: LangGraphRunnableConfig,
) => {
  const aiMsg = state.messages.at(-1) as AIMessage;

  const toolCall = aiMsg?.tool_calls?.[0];

  if (!toolCall) {
    return "end";
  }

  const toolCallingMsg: TStreamMessageType = {
    type: "toolCall:Start",
    payload: {
      name: toolCall.name,
      args: toolCall.args,
    },
  };

  config.writer?.(toolCallingMsg);
  return "tool_node";
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
