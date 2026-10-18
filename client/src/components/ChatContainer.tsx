import { fetchEventSource } from "@microsoft/fetch-event-source";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";
import Header from "./Header";

const URL = import.meta.env.VITE_API_URL;

export function ChatContainer() {
  const messages = ["Harsh"];

  const handleSubmit = async (question: string) => {
    await fetchEventSource(`${URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
      onmessage: (ev) => {
        console.log(ev.data);
      },
    });
  };

  return (
    <div className="flex flex-col h-screen w-full bg-zinc-950">
      {/* Header */}
      <Header />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="w-full max-w-5xl mx-auto">
          {messages.length > 0 ? (
            <div className="divide-y divide-zinc-800/50">
              <ChatMessage />
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="shrink-0 w-full">
        <ChatInput handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
