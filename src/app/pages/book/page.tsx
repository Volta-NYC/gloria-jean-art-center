import Link from "next/link"
import BookingForm from "@/lib/components/forms/booking-form"

export default function BookPage() {
  return (
    <div className="bg-[#fff4f8]">
      <section className="border-b border-pink-200/70 bg-[#fff8fb] px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-600">
              Book now
            </p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-[#831843] md:text-4xl">
              Fri./Sat. only
            </h1>
          </div>
          <div className="flex flex-col gap-3 md:items-start">
            <Link
              href="https://calendly.com/gloriajeanartcenter/new-meeting"
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold text-[#831843] underline decoration-pink-300 underline-offset-4 transition hover:text-pink-600"
            >
              https://calendly.com/gloriajeanartcenter/new-meeting
            </Link>
            <p className="max-w-2xl text-sm font-semibold leading-6 text-[#735868]">
              Use Calendly for Friday and Saturday booking requests. For other event
              details, complete the request form below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-300">
              Gloria Jean Community Art Center
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Request an event
            </h2>
            <p className="mt-4 text-lg font-semibold text-pink-50/85">
              Please provide the following information.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </div>
  )
}
