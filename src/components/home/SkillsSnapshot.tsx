import { Cpu, Code2, Database, Layout, Terminal, Zap } from "lucide-react";

const SNAPSHOT = [
  { icon: <Code2 />, label: "Python/Node.js", cat: "Backend" },
  { icon: <Layout />, label: "React/Next.js", cat: "Frontend" },
  { icon: <Cpu />, label: "AI/LLM Ops", cat: "Intelligence" },
  { icon: <Terminal />, label: "Automation", cat: "Operations" },
  { icon: <Database />, label: "PostgreSQL", cat: "Data" },
  { icon: <Zap />, label: "IoT Systems", cat: "Embedded" },
];

export default function SkillsSnapshot() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-3">
            Technical Arsenal
          </h2>
          <p className="text-slate-400">
            Building across the full stack with focus on impact
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SNAPSHOT.map((skill, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-3 p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 bg-white/10 rounded-xl text-blue-400 group-hover:text-emerald-400 transition-colors group-hover:scale-110 transform duration-300">
                {skill.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  {skill.cat}
                </p>
                <p className="font-bold text-white text-sm">
                  {skill.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}