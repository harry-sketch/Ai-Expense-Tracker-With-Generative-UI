import "dotenv/config";
import http from "node:http";
import { createExpressServer } from "./src/express-server/express.server.ts";

const PORT = process.env.PORT || 6969;

const main = async () => {
  try {
    const app = createExpressServer();

    const httpServer = http.createServer(app);

    httpServer.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

main();
