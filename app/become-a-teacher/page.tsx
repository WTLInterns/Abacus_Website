"use client";
import Button from "../components/Button";

export default function BecomeATeacher() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Become a Teacher</h1>
        <p className="mt-4 text-neutral-600">Get certified to teach Abacus. We provide training, resources, and ongoing support to help you succeed.</p>
        <div className="mt-8 flex gap-3">
          <Button 
            href="#"
            onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
          >
            Apply Now
          </Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      </div>
    </section>
  );
}
