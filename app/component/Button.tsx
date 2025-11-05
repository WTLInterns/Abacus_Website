import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "hero";
  children?: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
      secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-lg",
      ghost: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-primary hover:bg-primary/5",
      hero: "bg-gradient-to-r from-primary to-secondary text-white shadow-2xl shadow-primary/50 hover:shadow-primary/60 hover:scale-105 animate-gradient",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if ('href' in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
