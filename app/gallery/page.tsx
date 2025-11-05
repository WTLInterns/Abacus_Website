export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Gallery</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
            <img className="h-full w-full object-cover" src={`https://images.unsplash.com/photo-1523240967952-534a0c5d95b1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`} alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}
