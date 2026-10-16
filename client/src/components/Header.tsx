const Header = () => (
  <div className="shrink-0 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl w-full">
    <div className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
          <svg
            aria-label="true"
            className="w-6 h-6 text-white"
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
        <div>
          <h1 className="text-lg font-semibold text-zinc-100">
            AI Expense Tracker
          </h1>
          <p className="text-xs text-zinc-500">Powered by advanced AI</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
          Online
        </span>
      </div>
    </div>
  </div>
);

export default Header;
