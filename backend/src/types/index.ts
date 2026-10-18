import type { stateAnnotations } from "../graph/state.ts";

export type TStateType = typeof stateAnnotations.State;

export type TStreamMessageType =
  | { type: "ai"; payload: { text: string } }
  | {
      type: "tool";
      payload: {
        name: string;
        result: Record<string, string>;
      };
    }
  | {
      type: "toolCall:Start";
      payload: {
        name: string;
        args: Record<string, string>;
      };
    };
