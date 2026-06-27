import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1",
    outline:
      "border border-slate-300 bg-white hover:bg-slate-100 hover:-translate-y-1",
  };

  return (
    <button
      className={cn(base, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
