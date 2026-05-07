import Link from "next/link"
import ContactForm from "@/lib/components/forms/contact-form"

const heroStats = [
  "Private events only",
  "Seated dinner capacity 50",
  "Standing capacity 75",
]

const eventTypes = [
  "Birthday Parties",
  "Gender Reveals",
  "Baby Showers",
  "Bridal Parties",
  "Dinner Parties",
  "Bachelorette Parties",
  "Photograph Sessions",
  "Book Signings",
  "Business Meetings",
  "Business Warmings",
  "Brunches",
  "Memorials",
  "Repasts and Wakes",
]

const featuredEvents = [
  {
    title: "Celebrations",
    detail:
      "Birthdays, gender reveals, baby showers, bridal parties, bachelorette parties, and dinner parties in a warm private setting.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Meaningful Gatherings",
    detail:
      "Memorials, repasts, wakes, brunches, and family gatherings with enough room for guests to sit, connect, and remember.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Professional Uses",
    detail:
      "Photograph sessions, book signings, business meetings, and business warmings in a flexible venue layout.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
  },
]

const venueDetails = [
  "1,400 square ft. of usable indoor space",
  "900 square ft. private outdoor space with lighting",
  "Partial kitchen with double sink, refrigerator, and microwave",
  "50 chairs and 8 six-foot rectangle tables provided",
  "No steps / walk-in entrance",
  "Seated dinner capacity: 50 guests",
  "Standing capacity: 75 guests",
  "2 bathrooms",
]

const galleryImages = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=700&q=80",
]

const storyHighlights = [
  {
    title: "Family-owned",
    description:
      "We are a family-owned business sharing our venue with the community and beyond.",
  },
  {
    title: "Inspired by legacy",
    description:
      "It began with our grandparents, and we continue their legacy through a warm, inviting space.",
  },
  {
    title: "Personal attention",
    description:
      "Creating memorable experiences is what we love to do, with service that feels personal.",
  },
]

const reviews = [
  {
    quote:
      "The space was perfect for our ideas to come to life for my grandmothers birthday. She probably would've cried if she was here. The host were great and accommodated us last minute to make our event go as smoothly as possible. They were so sweet we added servers last minute and extended our stay to ensure that everything was left how we found it. Not once did they rush us or make us feel unwelcome. Thank you so much for everything. We would definitely book again",
    date: "September 8, 2024",
  },
  {
    quote:
      "Nytavia was wonderful. She made our son's christening event 100 times better than expected. I ordered different packages from her which included table and decor set up, a backdrop with my son name and more. I also got the backyard which was well worth it. My husband and I felt comfortable and so did our guests. When we arrived the place was well cleaned and set up beyond expectations. She even helped us set up the food and had all the kitchen utensils available. Overall we only setup our bar, cake table and DJ space. I will book her and her event space again. BTW the space is much bigger than pictures show. 50 plus people can fit comfortably",
    date: "April 14, 2024",
  },
  {
    quote:
      "Host was very gracious and helpful. The space was clean and the backyard was beautiful. Pictures do the space no justice as it is more spacious than appears in photos. I would definitely book again!",
    date: "November 20, 2023",
  },
  {
    quote:
      "Host was responsive and very helpful. She made sure that I had everything that I needed.",
    date: "March 18, 2023",
  },
  {
    quote:
      "Nytavia was prompt and responsive to messages! She was on time & easy to work with! The space is as advertised.",
    date: "May 14, 2022",
  },
  {
    quote: "The host was accommodating and friendly.",
    date: "July 16, 2023",
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#1d0712] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Private event table setup in a warm venue"
            className="h-full w-full object-cover opacity-40 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d0712] via-[#4b0f2b]/82 to-[#831843]/25" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff4f8] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-pink-200/30 bg-pink-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-pink-100 shadow-sm backdrop-blur">
              Private events only
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Our space is warm and inviting.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50/85 sm:text-xl">
              Gloria Jean Community Art Center is a family-owned private event venue
              for life&apos;s most meaningful moments, from joyful celebrations to
              intimate gatherings.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pages/book"
                className="rounded-full bg-pink-500 px-6 py-3 text-center text-sm font-black text-white shadow-xl shadow-pink-950/30 transition hover:bg-pink-400"
              >
                Book an Event
              </Link>
              <Link
                href="#events"
                className="rounded-full border border-pink-100/40 bg-white/5 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#831843]"
              >
                View Events
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat}
                  className="border-l border-pink-300 bg-white/10 px-4 py-3 text-sm font-semibold text-pink-50 backdrop-blur"
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-auto max-w-md rounded-lg border border-pink-100/20 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-pink-100">
                Superior service, personalized attention
              </div>
              <h2 className="mt-4 text-3xl font-black">
                A venue made for meaningful moments.
              </h2>
              <p className="mt-3 leading-7 text-pink-50/80">
                We share our space with the community and beyond, offering a warm
                setting for private celebrations of all kinds.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-3xl font-black">1,400</div>
                  <div className="text-pink-50/80">sq ft indoor space</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-3xl font-black">900</div>
                  <div className="text-pink-50/80">sq ft outdoor space</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">Private events</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Celebrate, gather, honor, and host in one flexible space.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#735868]">
              The venue is designed for private gatherings only, with clear capacity,
              practical amenities, and room for different event layouts.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="rounded-lg border border-pink-200/80 bg-white/85 px-5 py-4 text-sm font-bold text-[#2c1721] shadow-sm shadow-pink-900/5 transition hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md"
              >
                {event}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-lg border border-pink-100 bg-white shadow-lg shadow-pink-950/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={`${event.title} at Gloria Jean Community Art Center`}
                  className="h-full w-full object-cover saturate-125 transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{event.title}</h3>
                <p className="mt-3 leading-7 text-[#735868]">{event.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="space" className="bg-[#fce7f3] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-700">Description of venue</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              The details hosts ask about first.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#735868]">
              From the walk-in entrance to the private outdoor space, the venue gives
              guests the essentials for a comfortable private event.
            </p>
            <Link
              href="#booking"
              className="mt-8 inline-flex rounded-full bg-[#831843] px-5 py-3 text-sm font-black text-white shadow-lg shadow-pink-950/15 transition hover:bg-pink-600"
            >
              Ask About Your Date
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {venueDetails.map((detail) => (
              <div key={detail} className="rounded-lg border border-pink-200 bg-white/90 px-5 py-4 text-sm font-bold text-[#2c1721] shadow-sm shadow-pink-950/5">
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">Our story</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Inspired by legacy, built for community.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#735868]">
              It all began with our grandparents. We&apos;ve continued their legacy
              by offering a warm, inviting space for private celebrations of all
              kinds. Creating memorable experiences is what we love to do.
            </p>
          </div>

          <div className="grid gap-5">
            {storyHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-pink-100 bg-white p-6 shadow-lg shadow-pink-950/5">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#735868]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#1d0712] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-300">Gallery</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Check back often for new photos and events.
              </h2>
            </div>
            <p className="text-lg leading-8 text-pink-50/75">
              We&apos;re always evolving and regularly update the site with new
              features, photos, and upcoming events. These images are placeholders
              until the real venue gallery is added.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={image} className="aspect-[3/4] overflow-hidden rounded-lg bg-white/10 ring-1 ring-pink-200/10">
                <img
                  src={image}
                  alt={`Private event gallery preview ${index + 1}`}
                  className="h-full w-full object-cover opacity-90 saturate-125 transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#fff4f8] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">Guest reviews</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Guests feel taken care of from setup to sendoff.
              </h2>
            </div>
            <div className="rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-black text-[#831843] shadow-sm">
              ★★★★★ Yes, guests would book again
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.date}
                className="rounded-lg border border-pink-100 bg-white p-6 shadow-lg shadow-pink-950/5"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <div className="font-black tracking-[0.08em] text-[#831843]">★★★★★</div>
                  <div className="font-semibold text-[#9b6a7d]">Yes, I would book again</div>
                </div>
                <blockquote className="mt-5 text-base font-semibold leading-7 text-[#2c1721]">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold text-pink-500">
                  {review.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-gradient-to-r from-[#831843] via-pink-700 to-[#be185d] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-100">Private events only</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Ready to plan your next meaningful moment?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-pink-50/85">
              Send your date, guest count, and event type so the team can help you
              plan the right setup for the space.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/pages/book"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-pink-700 shadow-lg shadow-pink-950/20 transition hover:bg-pink-50"
            >
              Start Booking
            </Link>
            <Link
              href="#space"
              className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-white hover:text-pink-700"
            >
              Review Venue Details
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7eff2] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#831843] md:text-5xl">
              Contact us
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#831843]">
              Reach out to us and let us know if there is anything we can do for you.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  )
}
