/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      gridTemplateColumns: {
        "18-80px": "repeat(18, 80px)",
        "18-60px": "repeat(18, 60px)",
      },
      gridTemplateRows: {
        "10-80px": "repeat(10, 80px)",
        "10-60px": "repeat(10, 60px)",
      },
      gridColumnStart: {
        "13": "13",
        "18": "18"
      },
      gridRowStart: {
        "8": "8",
        "9": "9",
        "10": "10"
      },
      fontSize: {
        "2xs": "0.55rem"
      }
    },
	},
	plugins: [],
}
