import { MapPin, Code2, Heart, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="sticky top-24">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 border border-slate-200 shadow-xl">
              <img 
                src="/images/headshot.png" 
                alt="Frank Denish Omondi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                I build systems that{" "}
                <span className="text-blue-600">actually work</span>{" "}
                in the real world.
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Based in Nairobi, Kenya, my work sits at the intersection of robust technical support and innovative automation. I believe that technology in Africa shouldn't just be "cutting-edge"—it must be resilient, accessible, and high-impact.
              </p>
            </div>

            {/* Philosophy */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold border-b border-slate-200 pb-3">
                My Philosophy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Whether it's deploying a national safety platform or a clinical AI for rural health workers, I focus on the "Edge Cases"—the power outages, the offline moments, and the human factors that determine a system's true success.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm not just building software. I'm engineering trust, reliability, and measurable impact in environments where failure isn't an option.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code2 className="text-blue-600" />,
                  title: "Technical Excellence",
                  desc: "Production-grade code, comprehensive testing, and scalable architecture"
                },
                {
                  icon: <Heart className="text-emerald-600" />,
                  title: "Human-Centered",
                  desc: "Technology that serves real people solving real problems"
                },
                {
                  icon: <Rocket className="text-amber-600" />,
                  title: "Impact Driven",
                  desc: "Measurable outcomes that improve lives and operations"
                },
                {
                  icon: <MapPin className="text-indigo-600" />,
                  title: "Africa First",
                  desc: "Building for the unique challenges of African infrastructure"
                },
              ].map((value, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="mb-3">{value.icon}</div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>

            {/* Background */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold border-b border-slate-200 pb-3">
                Background
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  My journey into technology started with technical support, where I learned the importance of reliability, user experience, and operational excellence. This foundation shaped my approach to building systems—always considering the end-user and the real-world constraints they face.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, I specialize in automation, AI-assisted platforms, and civic technology. My work spans national-scale emergency response systems, offline-first medical AI, production automation tools, and embedded IoT solutions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-6">
                Want to collaborate on impactful technology?
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                  Let's Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}