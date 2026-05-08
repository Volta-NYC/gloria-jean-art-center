"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main section"))

    if (!targets.length) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => {
        target.classList.add("scroll-reveal")
      })
      targets.forEach((target) => target.classList.add("is-visible"))
      return
    }

    const offscreenTargets: HTMLElement[] = []

    targets.forEach((target) => {
      target.classList.add("scroll-reveal")
      const entersSoon = target.getBoundingClientRect().top <= window.innerHeight * 0.88

      if (entersSoon) {
        target.classList.add("is-visible")
      } else {
        offscreenTargets.push(target)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    offscreenTargets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
