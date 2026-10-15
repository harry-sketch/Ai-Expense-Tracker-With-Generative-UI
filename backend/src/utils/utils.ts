import { initDb } from "../db/db.ts";
import { model } from "../llm/openAi.model.ts";
import { toolsWithdb } from "../tools/index.ts";

export const createDbAgent = () => {
  const db = initDb("./src/db/expenses.db");

  const tools = toolsWithdb(db);

  const expenseModel = model.bindTools(tools);

  return {
    db,
    tools,
    expenseModel,
  };
};
