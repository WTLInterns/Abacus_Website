"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const EXTERNAL_FORM = "https://admin.vertexabacus.com/auth/sign-in";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const nav: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABACUS CLASSES",
    children: [
      { label: "Abacus Online Classes", href: "/abacus-online-classes" },
      { label: "Abacus Classes Near Me", href: "/abacus-classes-near-me" },
      { label: "Lingo Bingo", href: "/lingo-bingo" },
      { label: "Abacus Classes In School", href: "/abacus-for-schools" },
    ],
  },
  {
    label: "RESOURCES",
    children: [
      { label: "What is Abacus", href: "/about-abacus/what-is-abacus" },
      { label: "History Of Abacus", href: "/about-abacus/history-of-abacus" },
      // { label: "Research On Abacus", href: "/about-abacus/research-on-abacus" },
      { label: "Abacus Math", href: "/abacus-math" },
      { label: "Abacus Worksheet Generator", href: "/abacus-worksheet-generator" },
    ],
  },
  { label: "GET OUR FRANCHISE", href: "/abacus-franchise" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleEnquiryClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://admin.vertexabacus.com/auth/sign-in', '_blank');
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-gradient-to-r from-violet-600/10 via-white to-violet-600/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <img 
            src="/images/abacus_logo.png" 
            alt="Vertex Abacus Logo" 
            className="h-14 w-auto" 
            width={72} 
            height={72}
          />
          <span className="text-xl font-bold text-gray-900">Vertex Abacus</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-3">
          {nav.map((item, idx) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(idx)}
              onMouseLeave={() => setOpen((prev) => (prev === idx ? null : prev))}
            >
              {item.href ? (
                <Link href={item.href} className="px-3 py-2 text-sm font-medium text-black hover:text-black whitespace-nowrap">
                  {item.label}
                </Link>
              ) : (
                <button className="px-3 py-2 text-sm font-medium text-black hover:text-black whitespace-nowrap">
                  {item.label}
                </button>
              )}

              {item.children && (
                <div className={`absolute left-0 mt-2 w-64 rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur-xl p-2 shadow-2xl transition-all duration-200 ease-out ${open === idx ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}`}>
                  <ul className="grid gap-1">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-md px-3 py-2 text-sm text-black hover:bg-white/80">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <Button href="https://admin.vertexabacus.com/auth/sign-in" className="ml-2 whitespace-nowrap">Login</Button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <Button 
            href="https://admin.vertexabacus.com/auth/sign-in"
            className="whitespace-nowrap"
            onClick={handleEnquiryClick}
          >
            Login
          </Button>
          <Button 
            href="EXTERNAL_FORM" 
            variant="secondary" 
            className="hidden sm:inline-flex whitespace-nowrap"
            onClick={handleEnquiryClick}
          >
            Enquiry
          </Button>
          <button 
            onClick={() => setMobileOpen((s) => !s)} 
            aria-label="Toggle Menu" 
            className="rounded-md p-2 text-black hover:bg-neutral-100"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <ul className="grid gap-2">
              {nav.map((item, idx) => (
                <li key={item.label}>
                  {item.children ? (
                    <details>
                      <summary className="cursor-pointer select-none rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/70 whitespace-nowrap">{item.label}</summary>
                      <ul className="mt-1 ml-2 grid gap-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block rounded-md px-3 py-2 text-sm text-black hover:bg-white/70">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.href!} className="block rounded-md px-3 py-2 text-sm text-black hover:bg-white/70 whitespace-nowrap">{item.label}</Link>
                  )}
                  {item.label === 'CONTACT' && (
                    <Link 
                      href="https://admin.vertexabacus.com/auth/sign-in" 
                      className="block rounded-md px-3 py-2 text-sm text-black hover:bg-white/70 whitespace-nowrap font-medium"
                      onClick={handleEnquiryClick}
                    >
                      LOGIN
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-2">
              <Button 
                href="EXTERNAL_FORM" 
                className="w-full justify-center"
                onClick={handleEnquiryClick}
                variant="secondary"
              >
                RAISE AN INQUIRY
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
