import type { TStateType } from "../../types";
import { createDbAgent } from "../../utils/utils.ts";

const { expenseModel } = createDbAgent();

export const agentNode = async (state: TStateType) => {
  const resp = await expenseModel.invoke([
    {
      role: "",
      content: "",
    },
  ]);

  return {
    messages: [resp],
  };
};
