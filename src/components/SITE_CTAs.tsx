import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  variant?: "primary" | "secondary" | "tertiary";
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  size?: "sm" | "md" | "lg";
  target?: string;
}

export function SITE_CTA({
  variant = "primary",
  text,
  href,
  onClick,
  className,
  icon = true,
  size = "md",
  target,
}: CTAProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full overflow-hidden isolate";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  } as const;

  // Keep primary solid; draw secondary gradient via inner layer for crisp edges.
  const variantClasses: Record<string, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "text-white shadow-lg hover:shadow-xl", // gradient handled by inner <span />
    tertiary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur",
  };

  const Component: any = href ? "a" : "button";
  const props = href ? { href, target } : { onClick };

  return (
    <Component
      {...props}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
    >
      {/* Gradient layer only for secondary; shifts on hover */}
      {variant === "secondary" && (
        <span
          aria-hidden
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-r from-blue-500 to-cyan-400
            group-hover:from-blue-600 group-hover:to-cyan-500
            transition-colors duration-200
          "
        />
      )}

      {/* Content */}
      <span className="relative z-10 inline-flex items-center">
        {text}
        {icon && variant === "primary" && (
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
        {icon && variant === "secondary" && (
          <ArrowUpRight
            className="
              w-4 h-4 ml-2
              transition-all duration-200
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110
              group-hover:text-white/90
            "
          />
        )}
        {icon && variant === "tertiary" && (
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </span>
    </Component>
  );
}

export default SITE_CTA;
