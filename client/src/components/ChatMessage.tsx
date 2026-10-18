import { Ghost, User } from "lucide-react";
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
    return <div>Tools call</div>;
  }

  return null;
};

export default ChatMessage;
