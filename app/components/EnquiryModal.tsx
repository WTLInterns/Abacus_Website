"use client";
import React, { useCallback, useEffect, useState } from "react";

export function openEnquiryModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
  }
}

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  const handleOpenEvent = useCallback(() => setOpen(true), []);

  useEffect(() => {
    window.addEventListener("open-enquiry-modal", handleOpenEvent);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("open-enquiry-modal", handleOpenEvent);
      window.removeEventListener("keydown", onEsc);
    };
  }, [handleOpenEvent, onEsc]);

  const close = () => setOpen(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
        <div className="relative mt-8 w-full max-w-xl rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between px-5 pt-5">
            <div className="text-center w-full">
              <div className="text-sm text-neutral-500">Abacus Live Classes</div>
              <h3 className="mt-1 text-2xl font-bold text-neutral-900">Book A Free Demo Class</h3>
              <div className="text-sm text-neutral-500">Age Group 6–12 years only</div>
            </div>
            <button aria-label="Close" onClick={close} className="absolute right-3 top-3 rounded-md p-2 text-neutral-600 hover:bg-neutral-100">✕</button>
          </div>

          <form onSubmit={onSubmit} className="px-5 pb-5 pt-4 space-y-4">
            <input type="text" placeholder="Parent's Name" className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800" required />
            <input type="email" placeholder="Enter Email Id" className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800" required />
            <div className="grid grid-cols-3 gap-3">
              <select className="col-span-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-800">
                <option value="IN">🇮🇳 +91</option>
              </select>
              <input type="tel" placeholder="Enter WhatsApp number" className="col-span-2 w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800" required />
            </div>
            <input type="text" placeholder="Enter Your City" className="w-full border-b border-neutral-300 bg-transparent px-0 py-2 outline-none placeholder-neutral-400 focus:border-neutral-800" required />
            <select className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-800" required>
              <option value="">Select Age Group</option>
              <option>6 to 8 Years old</option>
              <option>9 to 12 Years old</option>
            </select>
            <input type="date" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-800" />

            <div className="rounded-md border border-neutral-300 p-3 text-neutral-500 text-sm">reCAPTCHA placeholder</div>

            <div className="text-xs text-neutral-500">
              By registering here, I agree to Vertex Abacus Terms & Conditions and Privacy Policy
            </div>

            <button type="submit" disabled={submitting} className="w-full rounded-lg bg-orange-500 px-4 py-3 text-white font-semibold hover:bg-orange-600 active:scale-95 transition">
              {submitting ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
