"use client";
import React from "react";
import Link from "next/link";
import { openEnquiryModal } from "./EnquiryModal";

const EXTERNAL_FORM = "https://vertexabacus.com/auth/sign-in";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ children, href, onClick, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800 focus-visible:ring-black",
    secondary: "bg-white text-black border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 focus-visible:ring-neutral-300",
    ghost: "bg-transparent text-black hover:bg-neutral-100",
  }[variant];

  if (href === "EXTERNAL_FORM") {
    return (
      <button className={`${base} ${styles} ${className}`} onClick={() => openEnquiryModal()}>
        {children}
      </button>
    );
  }

  if (onClick) {
    return (
      <button className={`${base} ${styles} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  const target = href;

  if (target) {
    const isExternal = target.startsWith("http");
    return isExternal ? (
      <a className={`${base} ${styles} ${className}`} href={target} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link className={`${base} ${styles} ${className}`} href={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} onClick={() => openEnquiryModal()}>
      {children}
    </button>
  );
}
