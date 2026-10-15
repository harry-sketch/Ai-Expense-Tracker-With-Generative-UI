import { SystemMessage, trimMessages } from "@langchain/core/messages";
import { model } from "../../llm/openAi.model.ts";
import type { TStateType } from "../../types";

export const agentNode = async (state: TStateType) => {
  const trimmedHistory = await trimMessages(state.messages, {
    maxTokens: 6,
    tokenCounter: (msg) => msg.length,
    startOn: "human",
    strategy: "last",
  });

  const resp = await model.invoke([
    new SystemMessage("Hello"),
    ...trimmedHistory,
  ]);

  return {
    messages: [resp],
  };
};
