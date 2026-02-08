import { ArrowRight, Code2, Globe2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-10 w-1/4 h-1/4 bg-emerald-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Available for Collaboration
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 leading-[0.9]">
            Frank Denish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Omondi
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Technical Support & Automation Specialist building{" "}
            <span className="text-slate-900 font-medium">resilient digital systems</span> that bridge the gap between complex automation and real-world African infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/projects">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-50 flex items-center justify-center text-blue-600 shadow-md">
                  <Code2 size={20} />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-md">
                  <Globe2 size={20} />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-amber-50 flex items-center justify-center text-amber-600 shadow-md">
                  <Sparkles size={20} />
                </div>
              </div>
              <span className="text-sm text-slate-500 font-medium">
                AI • Automation • Impact
              </span>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic leading-relaxed">
              "Designing practical, resilient technology solutions that solve real‑world problems across Africa through automation, intelligent systems, and accessible digital infrastructure."
            </p>
          </div>
        </div>

        <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-4">
          <div className="relative z-10 bg-white p-2 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100">
            <div className="aspect-[4/5] rounded-[1.8rem] overflow-hidden">
              <img 
                src="/images/headshot.png" 
                alt="Frank Denish Omondi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-[2.5rem] opacity-10 blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}