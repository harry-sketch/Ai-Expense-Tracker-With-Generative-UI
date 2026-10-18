import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useState } from "react";
import type { TStreamMessageType } from "../types";
import { ChatInput } from "./ChatInput";
import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";
import Header from "./Header";

const URL = import.meta.env.VITE_API_URL;

const thread_id =
  Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

export function ChatContainer() {
  const [messages, setMessages] = useState<TStreamMessageType[]>([]);

  const handleSubmit = async (question: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type: "user",
        payload: {
          text: question,
        },
      },
    ]);

    await fetchEventSource(`${URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        thread_id,
      }),
      onmessage: (ev) => {
        const parsedData = JSON.parse(ev.data) as TStreamMessageType;

        if (parsedData.type === "ai") {
          setMessages((prev) => {
            const lastMsg = prev.at(-1);

            if (lastMsg && lastMsg.type === "ai") {
              const clonedMsg = [...prev];

              clonedMsg[clonedMsg.length - 1] = {
                ...lastMsg,
                payload: {
                  text: lastMsg.payload.text + parsedData.payload.text,
                },
              };

              return clonedMsg;
            } else {
              return [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  type: "ai",
                  payload: parsedData.payload,
                },
              ];
            }
          });
        }
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
            <div>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
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
