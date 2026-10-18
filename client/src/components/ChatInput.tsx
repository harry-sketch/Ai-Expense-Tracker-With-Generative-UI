import { useEffect, useRef, useState } from "react";
import { icons } from "../assets/icons";

interface Props {
  handleSubmit: (question: string) => void;
}

export function ChatInput({ handleSubmit }: Props) {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [question, setQuestion] = useState<string>("");

  const handleInputData = (input: string) => {
    if (!input) {
      alert("Missing user input");
      return;
    }
    handleSubmit(input);
    setQuestion("");

    if (textRef.current) {
      textRef.current.style.height = "auto";
    }
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = question.trim();
    handleInputData(trimmedInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const trimmedInput = question.trim();
      handleInputData(trimmedInput);
    }
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <div className="bg-zinc-950 backdrop-blur-xl w-full">
      <div className="w-full max-w-5xl mx-auto p-2">
        <form className="relative" onSubmit={onSubmit}>
          <div className="relative flex items-end gap-3 bg-zinc-900 rounded-3xl border-zinc-600 focus-within:border-purple-500 transition-all shadow-2xl">
            <textarea
              ref={textRef}
              onKeyDown={(e) => handleKeyDown(e)}
              value={question}
              placeholder="Send a message..."
              disabled={false}
              rows={1}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-zinc-400 px-6 py-6 resize-none focus:outline-none max-h-48 overflow-y-auto disabled:opacity-50 text-base"
            />
            <button
              type="submit"
              disabled={false}
              className="shrink-0 m-2.5 p-3.5 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-xl hover:shadow-purple-500/50 disabled:hover:shadow-none hover:scale-105 active:scale-95"
            >
              {icons.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
