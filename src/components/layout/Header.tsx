import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-slate-900/5 rounded-2xl px-6 py-3">
          <Navigation />
        </div>
      </div>
    </header>
  );
}