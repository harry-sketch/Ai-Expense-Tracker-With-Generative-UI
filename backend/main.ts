import "dotenv/config";
import { initDb } from "./src/db/db.ts";

const main = () => {
  initDb("./src/db/expenses.db");
};

main();
