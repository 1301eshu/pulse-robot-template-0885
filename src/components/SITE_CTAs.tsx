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
}

export function SITE_CTA({
  variant = "primary",
  text,
  href,
  onClick,
  className,
  icon = true,
  size = "md",
}: CTAProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-blue-400 to-cyan-400 hover:brightness-110 text-white border border-transparent",
    tertiary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur"
  };

  const Component = href ? "a" : "button";
  
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {text}
      {icon && variant === "primary" && <ArrowRight className="w-4 h-4 ml-2" />}
      {icon && variant === "secondary" && <ArrowUpRight className="w-4 h-4 ml-2" />}
      {icon && variant === "tertiary" && <ArrowRight className="w-4 h-4 ml-2" />}
    </Component>
  );
}

export default SITE_CTA;