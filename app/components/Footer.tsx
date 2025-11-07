import Link from "next/link";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/share/1EmQ1ju6qa/", svg: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"/>' },
  { name: "Instagram", href: "https://www.instagram.com/vertex_abacus_academy?utm_source=qr&igsh=MWN1YjZqeG9vNnJlcg==", svg: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <img 
                src="/images/abacus_logo.jpg" 
                alt="Vertex Abacus Logo" 
                className="h-14 w-auto" 
                width={56} 
                height={56}
              />
              <span className="text-xl font-bold text-gray-900">Vertex Abacus</span>
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
              <li>Email: <a href="mailto:vertex.priyanka1@gmail.com" className="hover:underline text-blue-600">vertex.priyanka1@gmail.com</a></li>
              <li>Phone: <a href="tel:7821067359" className="hover:underline text-blue-600">7821067359</a></li>
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
