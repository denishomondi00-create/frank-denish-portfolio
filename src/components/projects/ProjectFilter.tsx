"use client";
import { useState } from "react";

const CATEGORIES = ["All", "AI/ML", "Automation", "Civic Tech", "IoT"];

interface ProjectFilterProps {
  onFilterChange: (category: string) => void;
}

export default function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className={`px-6 py-2 rounded-xl text-sm font-bold border transition-all duration-300 ${
            cat === activeCategory
              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105" 
              : "bg-white border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}