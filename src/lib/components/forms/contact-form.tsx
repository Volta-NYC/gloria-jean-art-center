"use client"

import { FormEvent, useState } from "react"

const fieldClass =
  "w-full rounded-md border border-[#9d8c95] bg-transparent px-4 py-4 text-base text-[#2c1721] outline-none transition placeholder:text-[#735868] focus:border-pink-500 focus:ring-2 focus:ring-pink-300/40"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-4xl gap-4">
      <input className={fieldClass} name="fullName" placeholder="Full name" required />
      <input className={fieldClass} type="email" name="email" placeholder="Email" required />
      <textarea className={`${fieldClass} min-h-24 resize-y`} name="message" placeholder="Message" required />
      <input className={fieldClass} type="tel" name="phone" placeholder="Phone number" />

      <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-[#831843]">
        You may receive marketing and promotional materials. Contact the merchant
        for their privacy practices.
      </p>
      <p className="mx-auto max-w-3xl text-center text-xs leading-5 text-[#b08394]">
        This form is protected by reCAPTCHA and the Google Privacy Policy and Terms
        of Service apply.
      </p>

      <button
        type="submit"
        className="mx-auto mt-2 rounded-full bg-pink-200 px-9 py-3 text-sm font-black text-[#8a274b] transition hover:bg-pink-300"
      >
        Submit
      </button>

      {submitted ? (
        <div className="rounded-lg border border-pink-200 bg-white/70 p-4 text-center text-sm font-semibold text-[#831843]">
          Thanks. The contact form is ready visually; connect it to email or a form
          service when the backend is chosen.
        </div>
      ) : null}
    </form>
  )
}
