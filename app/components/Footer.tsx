import Link from "next/link";

const socials = [
  { name: "Facebook", href: "https://facebook.com", svg: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"/>' },
  { name: "Instagram", href: "https://instagram.com", svg: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' },
  { name: "YouTube", href: "https://youtube.com", svg: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 47 47 0 0 0 0 12a47 47 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A47 47 0 0 0 24 12a47 47 0 0 0-.5-5.8zM9.8 15.5v-7l6.4 3.5-6.4 3.5z"/>' },
  { name: "LinkedIn", href: "https://linkedin.com", svg: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.002zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.4c0-1.3 0-3-1.8-3-1.9 0-2.2 1.4-2.2 2.9V21H9z"/>' },
  { name: "X", href: "https://x.com", svg: '<path d="M18 2h3l-7 8 8 10h-6l-5-6-6 6H2l8-9-7-9h6l4 5 5-5z"/>' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v4h4v2h-4v4h-2v-4H7V11h4V7h2z"/></svg>
              <span>Vertex Abacus</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600">Premium Abacus training for young minds. Build confidence, accuracy, and a lifelong love for numbers.</p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer" className="rounded-full border border-neutral-200 p-2 hover:bg-neutral-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{ __html: s.svg }} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Programs</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><Link href="/abacus-online-classes" className="hover:underline">Abacus Online Classes</Link></li>
              <li><Link href="/abacus-classes-near-me" className="hover:underline">Abacus Classes Near Me</Link></li>
              <li><Link href="/lingo-bingo" className="hover:underline">Lingo Bingo</Link></li>
              <li><Link href="/abacus-for-schools" className="hover:underline">Abacus Classes In School</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Useful Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><Link href="/about-abacus/what-is-abacus" className="hover:underline">What is Abacus</Link></li>
              <li><Link href="/contact" className="hover:underline">Parent's FAQs</Link></li>
              <li><Link href="/become-a-teacher" className="hover:underline">Teacher's Inquiry</Link></li>
              <li><Link href="/abacus-online-classes" className="hover:underline">Student's Inquiry</Link></li>
              <li><Link href="/abacus-online-classes" className="hover:underline">Book A Free Demo</Link></li>
              <li><Link href="/abacus-worksheet-generator" className="hover:underline">Abacus Worksheet Generator</Link></li>
              <li><Link href="/gallery" className="hover:underline">Parent's Testimonials</Link></li>
              <li><Link href="/abacus-franchise" className="hover:underline">Franchise FAQs</Link></li>
              <li><Link href="/abacus-franchise" className="hover:underline">Franchise Inquiry</Link></li>
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>Address: 51, Sampat Hills, Bicholi Mardana Bypass, Indore-452016, Madhya Pradesh, India</li>
              <li>Email: info@mmtpl.com</li>
              <li>Franchise inquiry: 9826251893</li>
              <li>Online classes: 9826074328</li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-6 text-xs text-neutral-600 flex flex-col gap-2">
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">Cancellation & Refund Policy</Link>
            <Link href="#" className="hover:underline">Shipping & Delivery Policy</Link>
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
          <div>© {new Date().getFullYear()} Vertex Abacus. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
