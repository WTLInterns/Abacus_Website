"use client";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Contact</h1>
        <p className="mt-4 text-neutral-600">Have questions? Reach us using the options below or register your interest.</p>
        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6">
          <p>Email: <a href="mailto:vertex.priyanka1@gmail.com" className="text-blue-600 hover:underline">vertex.priyanka1@gmail.com</a></p>
          <p className="mt-2">Phone: <a href="tel:7821067359" className="text-blue-600 hover:underline">+91 78210 67359</a></p>
          <div className="mt-6">
            <Button href="EXTERNAL_FORM">RAISE AN INQUIRY</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
