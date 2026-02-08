import ProjectCard from "../projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-display font-bold">Featured Systems</h2>
          <p className="text-slate-500">Selected work in automation and civic technology</p>
        </div>
        <Link 
          href="/projects" 
          className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group"
        >
          View all projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
        >
          View all projects
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}