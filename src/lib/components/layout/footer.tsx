import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-pink-800/40 bg-[#1d0712] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 text-sm md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-pink-200/40">
              <img
                src="/images/logo.png"
                alt="Gloria Jean Community Art Center logo"
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <div className="font-display text-2xl font-bold leading-none">Gloria Jean Community Art Center</div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-300">
                Events & Decor
              </div>
            </div>
          </div>
          <div className="max-w-md text-pink-100/75">
            A family-owned private event venue for warm, meaningful celebrations,
            community gatherings, and personalized event decor.
          </div>
          <div className="pt-3 text-pink-100/65">
            &copy; {new Date().getFullYear()} Gloria Jean Community Art Center
          </div>
          <Link
            href="https://voltanyc.org"
            target="_blank"
            rel="noreferrer"
            className="w-fit font-semibold text-[var(--volta-green)] hover:underline"
          >
            made by volta
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 text-pink-100/70">
          <Link href="/#events" className="hover:text-white">Events</Link>
          <Link href="/#space" className="hover:text-white">The Space</Link>
          <Link href="/pages/prices" className="hover:text-white">Prices</Link>
          <Link href="/#reviews" className="hover:text-white">Reviews</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
          <Link href="/pages/book" className="hover:text-white">Check Availability</Link>
        </div>
      </div>
    </footer>
  )
}
