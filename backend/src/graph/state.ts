import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

export const stateAnnotations = Annotation.Root({
  ...MessagesAnnotation.spec,
});
