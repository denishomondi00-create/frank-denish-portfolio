import { ExternalLink, Github, Shield, Zap, Lock, Activity } from "lucide-react";
import TechBadge from "@/components/projects/TechBadge";
import Link from "next/link";

export default function SafeWatchPage() {
  return (
    <article className="pb-24">
      {/* Cinematic Hero */}
      <header className="bg-slate-900 py-32 px-6 text-white relative overflow-hidden">
        {/* Project Image Background */}
        <img 
          src="/images/projects/safewatch-hero.png"
          alt="SafeWatch Kenya"
          className="absolute inset-0 w-full h-full object-cover opacity-200"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80 z-10" />
        
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase">
              Production Ready
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase">
              Civic Technology
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            SafeWatch Kenya
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            A national-scale platform enabling citizens to report incidents via web, mobile, and SMS, with AI-powered classification and intelligent routing to county authorities.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://github.com/denishomondi00-create/safewatch-kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-800">
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Scale</p>
              <p className="text-2xl font-display font-bold">National</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Architecture</p>
              <p className="text-2xl font-display font-bold">220+ Files</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Compliance</p>
              <p className="text-2xl font-display font-bold">Kenya DPA</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Deployment</p>
              <p className="text-2xl font-display font-bold">Kubernetes</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                "Limited emergency response coordination and civic safety reporting infrastructure across Kenya creates gaps in public safety and incident management."
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                SafeWatch Kenya is a comprehensive national-scale platform that enables citizens to report safety incidents through multiple channels (web, mobile, SMS, USSD). The system uses advanced AI for automatic classification and intelligent routing to the appropriate county and emergency services.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Shield />, title: "Multi-channel Reporting", desc: "Web, Mobile, SMS, USSD access" },
                  { icon: <Zap />, title: "AI Classification", desc: "Automatic incident categorization" },
                  { icon: <Activity />, title: "Real-time Analytics", desc: "Heatmaps and trend detection" },
                  { icon: <Lock />, title: "Privacy First", desc: "Kenya DPA 2019 compliant" },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-blue-600 mb-3">{feature.icon}</div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Solved */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Challenges Solved</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Privacy & Compliance",
                    desc: "Built-in consent management, audit trails, and data retention policies compliant with Kenya DPA 2019"
                  },
                  {
                    title: "AI Trust & Explainability",
                    desc: "Confidence gating, human override systems, and explainability features ensure AI decisions are transparent and accountable"
                  },
                  {
                    title: "National Scale",
                    desc: "Multi-region support, degraded mode operations, and feature flags enable reliable operation across all counties"
                  },
                  {
                    title: "System Interoperability",
                    desc: "Integration with DHIS2, police OB systems, and county dashboards for seamless data flow"
                  }
                ].map((challenge, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl">
                    <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                    <p className="text-slate-600">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Tech Stack */}
            <div className="p-8 bg-white border border-slate-200 rounded-3xl sticky top-24">
              <h3 className="font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Next.js', 'React Native', 'PostgreSQL', 'Redis', 'Celery', 'TensorFlow', 'Docker', 'Kubernetes', 'Terraform'].map(tech => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="font-bold mb-3 text-sm">Impact Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Files</span>
                    <span className="font-bold">220+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Deployment</span>
                    <span className="font-bold">National</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Compliance</span>
                    <span className="font-bold">DPA 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-50 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in this project?</h2>
          <p className="text-slate-600 mb-6">View the complete codebase and documentation on GitHub</p>
          <a 
            href="https://github.com/denishomondi00-create/safewatch-kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all"
          >
            <Github size={20} />
            View on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </article>
  );
}