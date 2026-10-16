import { ChatInput } from "./ChatInput";
import EmptyState from "./EmptyState";
import Header from "./Header";

export function ChatContainer() {
  return (
    <div className="flex flex-col h-screen w-full bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="w-full max-w-5xl mx-auto">
          <EmptyState />
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 w-full">
        <ChatInput />
      </div>
    </div>
  );
}
