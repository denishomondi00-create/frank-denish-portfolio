import { ExternalLink, Github, FileSpreadsheet, RefreshCw, CheckCircle } from "lucide-react";
import TechBadge from "@/components/projects/TechBadge";

export default function AutomationPage() {
  return (
    <article className="pb-24">
      <header className="bg-gradient-to-br from-amber-900 via-slate-900 to-slate-900 py-32 px-6 text-white relative overflow-hidden">
        {/* Project Image Background */}
        <img 
          src="/images/projects/automation-screenshot.png"
          alt="Automation Workflows"
          className="absolute inset-0 w-full h-full object-cover opacity-200"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-slate-900/95 to-slate-900 z-10" />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase mb-6 inline-block">
            Battle-Tested
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Automation Workflows
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Production automation tools that eliminate 90% of manual reporting cycles through deterministic Python pipelines.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://github.com/denishomondi00-create/automation-workflows"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-50 transition-all"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-800">
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Time Saved</p>
              <p className="text-3xl font-display font-bold text-amber-400">32 hrs/month</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Error Rate</p>
              <p className="text-3xl font-display font-bold text-emerald-400">0.001%</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Efficiency</p>
              <p className="text-3xl font-display font-bold text-blue-400">90%</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Engineering Approach</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Built using a modular Python stack (Pandas, OpenPyXL), these workflows transform fragmented operational data into deterministic, board-ready reports. The system includes automated retries, error logging, and version-controlled data schemas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <FileSpreadsheet />, title: "Excel Automation", desc: "Multi-sheet reports with formatting" },
                { icon: <RefreshCw />, title: "API Integration", desc: "REST endpoint orchestration" },
                { icon: <CheckCircle />, title: "Data Validation", desc: "Schema enforcement & quality checks" },
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="text-amber-600 mb-3">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
              <div className="space-y-4">
                {[
                  "Monthly performance dashboards with KPI aggregation",
                  "Financial compliance reports with audit trails",
                  "Operational analytics from multiple data sources",
                  "Multi-system data synchronization pipelines"
                ].map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                    <CheckCircle size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl sticky top-24">
              <h3 className="font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pandas', 'NumPy', 'OpenPyXL', 'REST APIs', 'Pytest'].map(tech => (
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