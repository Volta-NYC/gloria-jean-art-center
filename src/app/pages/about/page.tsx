const timeline = [
  {
    year: "2019",
    title: "Founded",
    detail:
      "In October 2019, Gloria Jean Community Art Center opened its doors in East New York with a vision rooted in community, creativity, and opportunity.",
  },
  {
    year: "2020",
    title: "Adapting through COVID-19",
    detail:
      "As the pandemic forced businesses to close, we adapted by organizing pop-up shops for local vendors and entrepreneurs — giving them a space to sell, connect, and survive.",
  },
  {
    year: "2021+",
    title: "Expanding into events",
    detail:
      "What started as a survival strategy evolved into a full event and creative venue, hosting celebrations, community gatherings, private events, and artistic experiences.",
  },
  {
    year: "Today",
    title: "Rooted in community",
    detail:
      "Many of our clients have been with us since 2020. That continued loyalty is a testament to the care, professionalism, and service we bring to every event.",
  },
]

const values = [
  {
    title: "Excellent service",
    detail:
      "From first inquiry to final sendoff, every client receives attentive, personalized attention.",
  },
  {
    title: "Meaningful connections",
    detail:
      "We believe in bringing people together — across celebrations, cultures, and communities.",
  },
  {
    title: "Lasting impact",
    detail:
      "Our goal is to create moments that people carry with them long after the event ends.",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1d0712] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d0712] via-[#4b0f2b]/80 to-[#831843]/40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-300">
            Our founder&apos;s story
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Built for community.<br />Inspired by family.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pink-50/80">
            Gloria Jean Community Art Center was founded in October 2019 with a
            simple mission: create a welcoming space where creativity, culture,
            and connection could thrive in East New York.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-6 text-lg leading-8 text-[#735868]">
          <p>
            I come from a family of business owners where entrepreneurship was
            always a way of life. Watching my family build businesses taught me
            the importance of hard work, service, and creating opportunities for
            others. As time passed and my family members could no longer continue
            operating their businesses, I felt inspired to carry that
            entrepreneurial spirit forward in a meaningful way.
          </p>
          <p>
            I recognized a need within the East New York community for a
            welcoming space where creativity, culture, and connection could
            thrive. I wanted to create more than just a business — I wanted to
            build a place where children, families, and local residents could
            gather, celebrate, learn, and feel supported.
          </p>
          <p className="font-bold text-[#2c1721]">
            In October 2019, I founded Gloria Jean Community Art Center with a
            vision rooted in community, creativity, and opportunity.
          </p>
          <p>
            Shortly after opening, the world changed. As the COVID-19 pandemic
            emerged in early 2020, businesses throughout New York City were
            forced to close, and communities faced uncertainty like never before.
            Like many small businesses, our art center was deeply impacted.
          </p>
          <p className="text-xl font-black text-[#831843]">
            Instead of giving up, we adapted.
          </p>
          <p>
            To continue supporting my family while also helping others in the
            community who had lost jobs and income, I began organizing small
            pop-up shops for local business owners and entrepreneurs. These
            events became a space for vendors to showcase their talents, sell
            their products, and reconnect with the community during a difficult
            time.
          </p>
          <p>
            What started as a way to survive soon evolved into something much
            greater. Through these pop-up experiences, Gloria Jean Community Art
            Center naturally expanded into an event and creative venue that now
            hosts celebrations, community gatherings, private events, networking
            opportunities, and artistic experiences for people of all ages.
          </p>
          <p>
            I am deeply grateful to the community for continuing to support our
            business throughout the years. Many of our clients have been with us
            since 2020 and still continue to celebrate their special moments with
            us today. That continued support is a true testimony to the level of
            care, professionalism, and service we provide to every client who
            walks through our doors.
          </p>
          <p className="font-bold text-[#2c1721]">
            Today, our mission remains the same: to provide a welcoming
            environment that brings people together through creativity, culture,
            and memorable experiences.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#fce7f3] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">
            Our journey
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            From vision to venue.
          </h2>

          <div className="mt-12 space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="grid gap-4 rounded-xl border border-pink-200 bg-white p-6 shadow-sm md:grid-cols-[120px_1fr]"
              >
                <div className="text-4xl font-black text-[#831843]">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#2c1721]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#735868]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">
          What we believe
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
          At Gloria Jean, we believe in excellent service, meaningful
          connections, and creating moments that leave a lasting impact.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-pink-100 bg-[#fff8fb] p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#831843]">{v.title}</h3>
              <p className="mt-3 leading-7 text-[#735868]">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#831843] via-pink-700 to-[#be185d] px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Ready to celebrate with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-pink-50/85">
            Join the community of families and friends who have trusted Gloria
            Jean to host their most meaningful moments.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/pages/book"
              className="rounded-full bg-white px-6 py-3 text-sm font-black text-pink-700 shadow-lg shadow-pink-950/20 transition hover:bg-pink-50"
            >
              Check Availability
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-pink-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
