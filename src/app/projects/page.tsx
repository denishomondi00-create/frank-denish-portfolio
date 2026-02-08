"use client";
import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects, getProjectsByCategory } from "@/lib/projects";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (category: string) => {
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Building systems that solve real-world problems across Africa. From national-scale civic platforms to offline-first medical AI.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ProjectFilter onFilterChange={handleFilterChange} />
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}