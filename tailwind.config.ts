import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "Nunito", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
export default config
