import Link from "next/link";
import TechBadge from "./TechBadge";
import { ArrowUpRight, Star } from "lucide-react";

interface ProjectProps {
  title: string;
  slug: string;
  tagline: string;
  tech: string[];
  metrics?: string[];
  featured?: boolean;
}

export default function ProjectCard({ 
  title, 
  slug, 
  tagline, 
  tech, 
  metrics,
  featured 
}: ProjectProps) {
  // Map slugs to image filenames
  const getImageName = (slug: string) => {
    const imageMap: Record<string, string> = {
      'safewatch-kenya': 'safewatch-hero',
      'afya-os': 'afya-dashboard',
      'automation-workflows': 'automation-screenshot',
      'iot-monitoring': 'iot-monitoring'
    };
    return imageMap[slug] || 'placeholder';
  };

  return (
    <Link href={`/projects/${slug}`} className="group block relative">
      <div className="relative h-[400px] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] overflow-hidden border border-slate-700 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
        
        {/* Project Image */}
        <img 
          src={`/images/projects/${getImageName(slug)}.png`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent z-10" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
          <div className="flex justify-between items-end">
            <div className="space-y-3 flex-1">
              <div className="flex gap-2 flex-wrap">
                {tech.slice(0, 3).map(tag => (
                  <TechBadge key={tag} name={tag} light />
                ))}
                {tech.length > 3 && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/10 border border-white/20 text-white">
                    +{tech.length - 3}
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-display font-bold group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <p className="text-slate-300 max-w-[90%] line-clamp-2 text-sm">
                {tagline}
              </p>
            </div>
            
            <div className="bg-white text-slate-900 p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 backdrop-blur-md rounded-full flex items-center gap-2">
            <Star size={14} className="fill-white text-white" />
            <span className="text-white text-xs font-bold">Featured</span>
          </div>
        )}
        
        {/* Metric Chip */}
        {metrics && metrics[0] && (
          <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold">
            {metrics[0]}
          </div>
        )}
      </div>
    </Link>
  );
}