import { icons } from "../assets/icons";

const Header = () => (
  <div className="shrink-0 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl w-full">
    <div className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="p-1.5 w-10 h-10 rounded-xl bg-teal-400 flex items-center justify-center shadow-lg">
          {icons.electric}
        </div>
        <div>
          <h1 className="text-lg font-semibold text-zinc-100">
            AI Expense Tracker
          </h1>
          <p className="text-xs text-zinc-500">Powered by advanced AI</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
