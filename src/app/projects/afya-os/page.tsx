import { ExternalLink, Github, Mic, ShieldCheck, Activity, Zap } from "lucide-react";
import TechBadge from "@/components/projects/TechBadge";

export default function AfyaOSPage() {
  return (
    <article className="pb-24">
      <header className="bg-emerald-950 py-32 px-6 text-white relative overflow-hidden">
        {/* Project Image Background */}
        <img 
          src="/images/projects/afya-dashboard.png"
          alt="Afya-OS Dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-200"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-emerald-950/80 z-10" />
        
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Medical-Grade AI
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Afya-OS</h1>
          
          <p className="text-xl text-emerald-100/70 max-w-3xl leading-relaxed mb-10">
            Offline-first clinical decision support for community health workers, featuring on-device LLM inference and Swahili voice-to-text.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://github.com/denishomondi00-create/Afya-OS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-emerald-800/50">
            <div>
              <p className="text-emerald-500 text-xs font-bold uppercase">Model</p>
              <p className="text-xl font-bold">LLaMA 3.2</p>
            </div>
            <div>
              <p className="text-emerald-500 text-xs font-bold uppercase">Latency</p>
              <p className="text-xl font-bold">&lt; 2s</p>
            </div>
            <div>
              <p className="text-emerald-500 text-xs font-bold uppercase">Connectivity</p>
              <p className="text-xl font-bold">100% Offline</p>
            </div>
            <div>
              <p className="text-emerald-500 text-xs font-bold uppercase">Language</p>
              <p className="text-xl font-bold">Eng/Swahili</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Edge Intelligence in Healthcare</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                In rural areas with zero connectivity, standard AI fails. Afya-OS runs a 2.1GB quantized model directly on mid-range Android devices, ensuring that clinical protocols (IMCI) are followed regardless of the network environment.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Mic />, title: "Voice Input", desc: "Swahili voice via Whisper STT" },
                  { icon: <ShieldCheck />, title: "Privacy First", desc: "No data leaves the device" },
                  { icon: <Activity />, title: "DHIS2 Integration", desc: "Syncs with national health systems" },
                  { icon: <Zap />, title: "Fast Inference", desc: "< 2s response time" },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="text-emerald-600 mb-3">{feature.icon}</div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Innovations</h2>
              <div className="space-y-4">
                {[
                  { title: "On-device AI", desc: "Runs without internet using GGUF quantization for maximum accessibility" },
                  { title: "Voice Interface", desc: "Rural-optimized noise cancellation for accurate Swahili voice input" },
                  { title: "Safety Controls", desc: "Red flag detection with automatic fallback to manual protocols" },
                  { title: "Clinical Validation", desc: "Physician review benchmarks and adverse event reporting" },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl sticky top-24">
              <h3 className="font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Node.js', 'GraphQL', 'LLaMA 3.2', 'Whisper', 'PostgreSQL', 'Prisma', 'Docker'].map(tech => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}