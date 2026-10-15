import { ChatOpenAI } from "@langchain/openai";
import { tools } from "../tools/index.ts";

export const model = new ChatOpenAI({
  model: "gpt-6-luna",
  temperature: 0,
  apiKey: process.env.OPEN_AI_API_KEY,
  maxRetries: 6,
  maxTokens: 800,
  reasoning: {
    effort: "none",
  },
}).bindTools(tools);
