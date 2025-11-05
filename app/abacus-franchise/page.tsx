"use client";
import Button from "../components/Button";

export default function AbacusFranchise() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Abacus Franchise</h1>
        <p className="mt-4 text-neutral-600">Launch an education business with our training, curriculum, and brand playbook. Low investment, high impact.</p>
        <div className="mt-8 flex gap-3">
          <Button href="EXTERNAL_FORM">Franchise Enquiry</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      </div>
    </section>
  );
}
