import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "hero";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
}

interface AnchorProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'a';
  href: string;
}

type Props = ButtonProps | AnchorProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants: Record<ButtonVariant, string> = {
      primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
      secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-lg",
      ghost: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-primary hover:bg-primary/5",
      hero: "bg-gradient-to-r from-primary to-secondary text-white shadow-2xl shadow-primary/50 hover:shadow-primary/60 hover:scale-105 animate-gradient",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (props.as === 'a') {
      const { as, ...rest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }

    const { as, ...buttonProps } = props;
    
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type || 'button'}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
