import "dotenv/config";
import { runWorkflow } from "./src/graph/nodes/run.workflow.ts";

const main = async () => {
  await runWorkflow();
};

main();
