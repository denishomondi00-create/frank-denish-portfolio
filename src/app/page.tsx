import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsSnapshot from "@/components/home/SkillsSnapshot";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Snapshot */}
      <SkillsSnapshot />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to collaborate on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                impactful technology?
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm open to working on civic tech, healthcare systems, automation projects, and AI-assisted platforms across Africa and beyond.
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:bg-blue-50 transition-all shadow-xl">
                Let's Connect
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}