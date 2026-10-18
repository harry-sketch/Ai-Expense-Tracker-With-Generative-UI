import { Ghost, User, Wrench } from "lucide-react";
import type { TStreamMessageType } from "../types";

interface Props {
  message: TStreamMessageType;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const { payload, type } = message;

  if (type === "user") {
    return (
      <div className="flex justify-end items-end gap-3 px-6 py-4">
        <div className="p-2 shrink-0 rounded-full bg-zinc-200 border border-zinc-200 flex items-center justify-center">
          <User className="w-6 h-6 text-blue-800" />
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-2.5 text-zinc-100 whitespace-pre-wrap wrap-break-word leading-7">
          {payload.text}
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="flex justify-start items-end gap-3 px-6 py-4">
        <div className="p-2 shrink-0 rounded-full bg-zinc-200 border border-zinc-200 flex items-center justify-center">
          <Ghost className="w-6 h-6 text-emerald-800" />
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-2.5 text-zinc-100 whitespace-pre-wrap wrap-break-word leading-7">
          {payload.text}
        </div>
      </div>
    );
  }

  if (type === "tool") {
    return <div>tools</div>;
  }

  if (type === "toolCall:Start") {
    return (
      <div className="flex gap-4 py-4 px-6">
        <div className="shrink-0">
          <div className="w-8 h-8 rounded-lg bg-teal-400 flex items-center justify-center">
            <Wrench color="green" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-sm text-zinc-400 italic">
            Using tool:{" "}
            <span className="text-teal-400 font-medium">
              {message.payload.name}
            </span>
          </div>
          <div className="text-xs text-zinc-300 bg-teal-900/15 rounded-lg p-3 font-mono whitespace-pre-wrap">
            {JSON.stringify(message.payload.args, null, 2)}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ChatMessage;
