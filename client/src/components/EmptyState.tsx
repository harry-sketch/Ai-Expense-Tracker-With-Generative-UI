const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-full min-h-[60vh] px-6 py-8">
    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-2xl mb-6 animate-pulse">
      <svg
        aria-label="true"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
    <h2 className="text-3xl font-bold text-zinc-100 mb-3">
      How can I help you today?
    </h2>
    <p className="text-zinc-500 text-center max-w-md mb-8">
      Ask me anything, and I'll do my best to assist you with information,
      analysis, and creative solutions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl px-4">
      {[
        {
          icon: "💡",
          title: "Get ideas",
          desc: "Brainstorm creative solutions",
        },
        {
          icon: "📊",
          title: "Analyze data",
          desc: "Extract insights from information",
        },
        {
          icon: "✍️",
          title: "Write content",
          desc: "Create engaging text and copy",
        },
        {
          icon: "🔧",
          title: "Solve problems",
          desc: "Find answers to your questions",
        },
      ].map(({ desc, icon, title }) => (
        <div
          key={title}
          className="p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:border-purple-500/50 transition-all cursor-pointer group"
        >
          <div className="text-2xl mb-2">{icon}</div>
          <div className="text-sm font-medium text-zinc-200 group-hover:text-purple-400 transition-colors">
            {title}
          </div>
          <div className="text-xs text-zinc-500 mt-1">{desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default EmptyState;
