"use client"

import { FormEvent, useState } from "react"

const inputClass =
  "w-full rounded-lg border border-pink-100/25 bg-black px-5 py-4 text-base text-white outline-none transition placeholder:text-pink-50/55 focus:border-pink-300 focus:ring-2 focus:ring-pink-400/25"

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-3xl gap-4">
      <input className={inputClass} name="fullName" placeholder="Full name *" required />
      <input className={inputClass} type="email" name="email" placeholder="Email *" required />
      <input className={inputClass} type="tel" name="phone" placeholder="Phone number *" required />

      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} type="date" name="eventDate" aria-label="Event date" required />
        <input className={inputClass} type="time" name="startTime" aria-label="Event start time" required />
      </div>

      <input className={inputClass} type="time" name="endTime" aria-label="Event end time" required />

      <select className={inputClass} name="needsDj" required defaultValue="">
        <option value="" disabled>Do you need a DJ? *</option>
        <option>Yes</option>
        <option>No</option>
        <option>Not sure yet</option>
      </select>

      <input
        className={inputClass}
        name="decor"
        placeholder="Do you need someone to decorate for your event? If yes, please specify."
      />

      <textarea
        className={`${inputClass} min-h-32 resize-y`}
        name="additionalInformation"
        placeholder="Additional information: include anything you might need *"
        required
      />

      <input className={inputClass} type="number" min="1" name="guests" placeholder="Number of guests *" required />

      <p className="mx-auto max-w-2xl text-center text-sm font-semibold leading-6 text-pink-50/85">
        You may receive marketing and promotional materials. Contact the merchant
        for their privacy practices.
      </p>
      <p className="mx-auto max-w-2xl text-center text-xs font-semibold leading-5 text-pink-50/45">
        This form is protected by reCAPTCHA and the Google Privacy Policy and Terms
        of Service apply.
      </p>

      <button
        type="submit"
        className="mx-auto mt-2 rounded-full bg-pink-200 px-9 py-3 text-sm font-black text-[#1d0712] shadow-lg shadow-pink-950/20 transition hover:bg-white"
      >
        Submit
      </button>

      {submitted ? (
        <div className="rounded-lg border border-pink-200/25 bg-pink-200/10 p-4 text-center text-sm font-semibold text-pink-50">
          Thanks. The request form is ready visually; connect it to email, a CRM,
          or a form service when the booking backend is chosen.
        </div>
      ) : null}
    </form>
  )
}
