import Link from "next/link"

const privateEventRates = [
  {
    label: "Sunday private event",
    time: "8 hours, 2:00 p.m. to 10:00 p.m.",
    price: "$1,000",
    note: "Includes setup and cleaning.",
  },
  {
    label: "Friday / Saturday private event",
    time: "12-hour events such as 10 a.m. to 10 p.m. or 11 a.m. to 11 p.m.",
    price: "$1,500",
    note: "Includes setup and clean up.",
  },
  {
    label: "12:00 p.m. to 12:00 a.m.",
    time: "Friday / Saturday event timeframe",
    price: "$1,650",
    note: "Includes setup and clean up.",
  },
  {
    label: "1:00 p.m. to 1:00 a.m.",
    time: "Friday / Saturday event timeframe",
    price: "$1,800",
    note: "Includes setup and clean up.",
  },
  {
    label: "2:00 p.m. to 2:00 a.m.",
    time: "Friday / Saturday event timeframe",
    price: "$2,100",
    note: "Includes setup and clean up.",
  },
  {
    label: "Hourly private event rate",
    time: "Weekday rates, anytime before 11:00 p.m.",
    price: "$300 / hour",
    note: "Includes 2 hours before to set up and 1 hour after to clean up.",
  },
]

const pricingSections = [
  {
    title: "Corporate / Business Events",
    description:
      "Meetings, workshops, and team building with groups of 20 persons or less.",
    rates: [
      ["Monday - Thursday", "9 a.m. to 4 p.m.", "$150 / hour"],
      ["Monday - Thursday", "5 p.m. to 9 p.m.", "$200 / hour"],
      ["Friday / Saturday / Sunday", "9 a.m. to 4 p.m.", "$250 / hour"],
      ["Friday / Saturday / Sunday", "5 p.m. to 10 p.m.", "$300 / hour"],
    ],
    note: "Weekend bookings include 2 hours before to set up.",
  },
  {
    title: "Creative Professionals",
    description:
      "Photography and videography with groups of 10 persons or less.",
    rates: [
      ["Monday - Thursday", "9 a.m. to 4 p.m.", "$75 / hour"],
      ["Monday - Thursday", "5 p.m. to 9 p.m.", "$95 / hour"],
      ["Friday / Saturday / Sunday", "9 a.m. to 4 p.m.", "$100 / hour"],
      ["Friday / Saturday / Sunday", "5 p.m. to 10 p.m.", "$150 / hour"],
    ],
  },
  {
    title: "Community / Cultural Events",
    description:
      "Pop-up shops, Paint n Sip, teaching or learning workshops, dance, yoga, theater, music, and performance.",
    rates: [
      ["Monday - Thursday", "9 a.m. to 4 p.m.", "$120 / hour"],
      ["Monday - Thursday", "5 p.m. to 10 p.m.", "$150 / hour"],
      ["Friday / Saturday / Sunday", "9 a.m. to 4 p.m.", "$175 / hour"],
      ["Friday / Saturday / Sunday", "5 p.m. to 9 p.m.", "$225 / hour"],
    ],
    note: "Groups of 25 persons or less. Groups over 25 are capped at 40 persons and require an additional $100.",
  },
  {
    title: "Community / Non-profit Events",
    description:
      "Church service, worship meetings, worship conferences, fundraising, and more.",
    rates: [
      ["Monday - Thursday", "9 a.m. to 4 p.m.", "$150 / hour"],
      ["Monday - Thursday", "5 p.m. to 9 p.m.", "$200 / hour"],
      ["Friday / Saturday / Sunday", "9 a.m. to 3 p.m.", "$200 / hour"],
      ["Friday / Saturday / Sunday", "5 p.m. to 10 p.m.", "$250 / hour"],
    ],
    note: "Proof of non-profit organization documentation is required. Groups of 50 persons or less. Non-profit parties with more than 50 persons should use Private Event pricing.",
  },
]

export default function PricesPage() {
  return (
    <div className="bg-[#fff4f8]">
      <section className="bg-[#1d0712] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-300">
            Our prices
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
            Pricing for private events, business use, and creative bookings.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-pink-50/80 md:text-xl">
            Choose the event type that best matches your gathering. Capacity,
            minimum hours, setup time, and booking expectations are listed below.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pages/book"
              className="rounded-full bg-pink-500 px-6 py-3 text-center text-sm font-black text-white shadow-xl shadow-pink-950/30 transition hover:bg-pink-400"
            >
              Book Here
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-pink-100/40 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-white hover:text-pink-700"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-lg border border-pink-200 bg-white p-6 shadow-lg shadow-pink-950/5 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">
                Private Events
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Celebrations and memorial gatherings.
              </h2>
            </div>
            <div className="rounded-full bg-pink-50 px-5 py-3 text-sm font-black text-pink-700">
              Minimum 5 hours for all events
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#735868]">
            Includes small weddings, adult and children parties, baby showers,
            gender reveals, memorials, wakes, and repasts. Capacity must not go
            over 65 persons.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {privateEventRates.map((rate) => (
              <article key={rate.label} className="rounded-lg border border-pink-100 bg-[#fff8fb] p-5">
                <div className="text-3xl font-black text-pink-700">{rate.price}</div>
                <h3 className="mt-3 text-xl font-black text-[#2c1721]">{rate.label}</h3>
                <p className="mt-2 text-sm font-semibold text-[#735868]">{rate.time}</p>
                <p className="mt-4 text-sm leading-6 text-[#735868]">{rate.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-16 md:px-8 lg:grid-cols-2">
        {pricingSections.map((section) => (
          <article key={section.title} className="rounded-lg border border-pink-100 bg-white p-6 shadow-lg shadow-pink-950/5">
            <h2 className="text-3xl font-black text-[#2c1721]">{section.title}</h2>
            <p className="mt-3 leading-7 text-[#735868]">{section.description}</p>

            <div className="mt-6 divide-y divide-pink-100 overflow-hidden rounded-lg border border-pink-100">
              {section.rates.map(([days, time, price]) => (
                <div key={`${days}-${time}`} className="grid gap-2 bg-[#fff8fb] p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
                  <div className="font-black text-[#2c1721]">{days}</div>
                  <div className="text-sm font-semibold text-[#735868]">{time}</div>
                  <div className="text-lg font-black text-pink-700">{price}</div>
                </div>
              ))}
            </div>

            {section.note ? (
              <p className="mt-5 rounded-lg bg-pink-50 p-4 text-sm font-semibold leading-6 text-[#735868]">
                {section.note}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="bg-gradient-to-r from-[#831843] via-pink-700 to-[#be185d] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-100">
              Pricing and booking expectations
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              A $200 non-refundable payment holds your event date.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-pink-50/85">
              The balance is due 2 weeks before the event. Minimum hours are
              required for any event.
            </p>
          </div>
          <Link
            href="/pages/book"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-pink-700 shadow-lg shadow-pink-950/20 transition hover:bg-pink-50"
          >
            Book Fri. & Sat.
          </Link>
        </div>
      </section>
    </div>
  )
}
