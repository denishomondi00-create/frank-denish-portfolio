import { ExternalLink, Github, Cpu, Wifi, BarChart3, Bell } from "lucide-react";
import TechBadge from "@/components/projects/TechBadge";

export default function IOTPage() {
  return (
    <article className="pb-24">
      <header className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 py-32 px-6 text-white relative overflow-hidden">
        {/* Project Image Background */}
        <img 
          src="/images/projects/iot-monitoring.png"
          alt="IoT Monitoring System"
          className="absolute inset-0 w-full h-full object-cover opacity-200"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-slate-900/95 to-slate-900 z-10" />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-bold uppercase mb-6 inline-block">
            Hardware + Software
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            IoT Monitoring System
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Real-time environmental sensing using ESP32 microcontrollers and MQTT protocols. This system bridges the gap between physical sensors and cloud visualization.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://github.com/denishomondi00-create/iot-monitoring-system"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-800">
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Latency</p>
              <p className="text-2xl font-display font-bold text-indigo-400">&lt; 500ms</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Power Mode</p>
              <p className="text-2xl font-display font-bold text-emerald-400">Deep Sleep</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase font-bold">Protocol</p>
              <p className="text-2xl font-display font-bold text-blue-400">MQTT</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Full-Stack IoT Engineering</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                This project demonstrates end-to-end IoT system design, from embedded firmware to cloud dashboards. ESP32 microcontrollers collect environmental data and transmit it via MQTT to a backend service for storage and real-time visualization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Cpu />, title: "Edge Computing", desc: "Local processing on ESP32" },
                { icon: <Wifi />, title: "MQTT Protocol", desc: "Lightweight, reliable messaging" },
                { icon: <BarChart3 />, title: "Live Dashboards", desc: "Real-time React visualization" },
                { icon: <Bell />, title: "Alert System", desc: "Threshold-based notifications" },
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <div className="text-indigo-600 mb-3">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Engineering Depth</h2>
              <div className="space-y-4">
                {[
                  "Hardware-software integration across embedded and cloud layers",
                  "Serial/MQTT communication protocols for reliable data transmission",
                  "Sensor calibration and noise filtering algorithms",
                  "Real-time data pipelines with sub-second latency",
                  "Power-efficient sampling using deep sleep modes"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                    <p className="text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl sticky top-24">
              <h3 className="font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'Arduino', 'ESP32', 'Python', 'MQTT', 'SQLite', 'React'].map(tech => (
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