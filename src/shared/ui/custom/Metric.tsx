import { cn } from "@styles";

export const Metric = ({ unit, label, highlight }: { unit: string; label: string; highlight?: boolean }) => (
  <div className="flex flex-col items-center gap-1.5">
    <span
      className={cn(
        "font-funnel text-4xl font-extrabold tracking-tighter md:text-6xl",
        highlight ? "bg-primary-gradient bg-clip-text text-transparent" : "text-white",
      )}
    >
      {unit}
    </span>
    <span className="text-muted-foreground font-sans text-[9px] font-medium tracking-[3px] md:text-[10px]">
      {label}
    </span>
  </div>
);
