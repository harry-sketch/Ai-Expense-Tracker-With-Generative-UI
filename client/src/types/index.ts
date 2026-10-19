export interface IMessages {
  id: string;
  role: "human" | "ai" | "system";
  content: string;
}

export interface IChartConfig {
  date: string;
  totalAmt: number;
}

export type TStreamMessageType =
  | { id: string; type: "user"; payload: { text: string } }
  | { id: string; type: "ai"; payload: { text: string } }
  | {
      id: string;
      type: "tool";
      payload: {
        name: string;
        result: Record<string, any>;
      };
    }
  | {
      id: string;
      type: "toolCall:Start";
      payload: {
        name: string;
        args: Record<string, any>;
      };
    };
