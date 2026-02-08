import { Mail, Github, Linkedin, Send, Phone, Copy } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-24">
      <section className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              impactful
            </span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            I'm currently open to collaboration on civic tech, healthcare systems, and high-scale automation projects across Africa and beyond.
          </p>
        </div>

        {/* Primary Contact */}
        <div className="space-y-4 mb-12">
          <a 
            href="mailto:denishomondi00@gmail.com" 
            className="flex items-center justify-center gap-3 p-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl group"
          >
            <Mail size={24} />
            <span>denishomondi00@gmail.com</span>
            <Copy size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://github.com/denishomondi00-create"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group"
          >
            <div className="p-3 bg-slate-900 rounded-xl text-white group-hover:bg-blue-600 transition-colors">
              <Github size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900">GitHub</p>
              <p className="text-sm text-slate-500">View my repositories</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/frank-omondi-954731216"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group"
          >
            <div className="p-3 bg-blue-600 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
              <Linkedin size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900">LinkedIn</p>
              <p className="text-sm text-slate-500">Professional profile</p>
            </div>
          </a>

          <a 
            href="https://t.me/Denish199"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group"
          >
            <div className="p-3 bg-blue-500 rounded-xl text-white group-hover:bg-blue-600 transition-colors">
              <Send size={24} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900">Telegram</p>
              <p className="text-sm text-slate-500">@Denish199</p>
            </div>
          </a>

          <div className="flex flex-col gap-3 p-6 bg-white border border-slate-200 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500 rounded-xl text-white">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">WhatsApp</p>
              </div>
            </div>
            <div className="space-y-2 pl-16">
              <a 
                href="https://wa.me/254757751863" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors"
              >
                +254 757 751 863
              </a>
              <a 
                href="https://wa.me/254114077685" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-600 hover:text-emerald-600 transition-colors"
              >
                +254 114 077 685
              </a>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-slate-600">
            <span className="font-bold text-slate-900">Response time:</span> Usually within 48 hours
          </p>
        </div>

        {/* Collaboration Interests */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            Collaboration Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Civic technology projects",
              "Healthcare and public sector systems",
              "Automation and operational efficiency",
              "AI-assisted platforms",
              "Open-source contributions",
              "Technical consulting"
            ].map((interest, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span className="text-slate-700">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 flex items-center justify-center gap-2">
            <span className="text-2xl">📍</span>
            <span>Based in Nairobi, Kenya</span>
            <span className="text-2xl">🇰🇪</span>
          </p>
        </div>
      </section>
    </div>
  );
}