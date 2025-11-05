"use client";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Contact</h1>
        <p className="mt-4 text-neutral-600">Have questions? Reach us using the options below or register your interest.</p>
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6">
          <p>Email: hello@vertexabacus.com</p>
          <p className="mt-2">Phone: +91 90000 00000</p>
          <div className="mt-6">
            <Button href="EXTERNAL_FORM">RAISE AN INQUIRY</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
