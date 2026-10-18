export interface IMessages {
  id: string;
  role: "human" | "ai" | "system";
  content: string;
}
