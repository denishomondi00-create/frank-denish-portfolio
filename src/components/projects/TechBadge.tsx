export default function TechBadge({ 
  name, 
  light = false 
}: { 
  name: string; 
  light?: boolean 
}) {
  return (
    <span className={`
      px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors
      ${light 
        ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
      }
    `}>
      {name}
    </span>
  );
}