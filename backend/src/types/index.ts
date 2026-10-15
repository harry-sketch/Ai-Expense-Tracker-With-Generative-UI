import type { z } from "zod/v4";
import type { stateAnnotations } from "../graph/state.ts";

export type TStateType = z.infer<typeof stateAnnotations.State>;
