import { SystemMessage } from "@langchain/core/messages";
import { SYSTEM_PROMPT } from "../../prompts/prompts.ts";
import type { TStateType } from "../../types/index.ts";
import { createDbAgent } from "../../utils/utils.ts";

const { expenseModel } = createDbAgent();

export const agentNode = async (state: TStateType) => {
  const resp = await expenseModel.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    ...state.messages,
  ]);

  return {
    messages: [resp],
  };
};
