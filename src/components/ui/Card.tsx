import { cn } from "@/lib/utils";

export function Card({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode 
}) {
  return (
    <div className={cn(
      "rounded-[2rem] border border-slate-100 bg-white shadow-sm overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode 
}) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}

export function CardContent({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode 
}) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
}