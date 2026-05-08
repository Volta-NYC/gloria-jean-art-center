"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-200/70 bg-[#fff4f8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="leading-tight">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-pink-200">
              <img
                src="/images/logo.png"
                alt="Gloria Jean Community Art Center logo"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-xl font-bold leading-none text-[#21131a]">
                Gloria Jean
              </span>
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.22em] text-pink-600">
                Events & Decor
              </span>
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-7 text-sm font-semibold text-[#6f5360] md:flex">
          <Link href="/#events" className="transition hover:text-pink-700">Events</Link>
          <Link href="/#space" className="transition hover:text-pink-700">The Space</Link>
          <Link href="/pages/prices" className="transition hover:text-pink-700">Prices</Link>
          <Link href="/#gallery" className="transition hover:text-pink-700">Gallery</Link>
          <Link href="/#reviews" className="transition hover:text-pink-700">Reviews</Link>
          <Link href="/#story" className="transition hover:text-pink-700">Our Story</Link>
          <Link href="/#contact" className="transition hover:text-pink-700">Contact</Link>
        </div>

        <Link
          href="/pages/book"
          className="rounded-full bg-pink-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-pink-900/15 transition hover:bg-pink-700"
        >
          Check Availability
        </Link>
      </div>
    </nav>
  )
}
