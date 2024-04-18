import daisyui from "./node_modules/daisyui"
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: ["light"],
  },
  plugins: [daisyui],
}