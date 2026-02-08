import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <p className="font-display font-bold text-2xl tracking-tight">
              Frank Denish <span className="text-blue-600">Omondi</span>
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Building resilient digital infrastructure and AI-assisted platforms for the African context.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Projects</a>
              <a href="/about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">About</a>
              <a href="/skills" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Skills</a>
              <a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Connect</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="https://github.com/denishomondi00-create" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/frank-omondi-954731216" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:denishomondi00@gmail.com" 
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a 
                href="https://t.me/Denish199" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <Send size={16} />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Frank Denish Omondi. All Rights Reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Nairobi, Kenya 🇰🇪
          </p>
        </div>
      </div>
    </footer>
  );
}