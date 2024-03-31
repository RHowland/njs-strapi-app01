import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				inter: ["var(--inter)"],
			},
      colors: {
        primary: {
          50: "#F3F5F7",
					100: "#E8ECEF",
					500: "#6C7275",
					600: "#343839",
					700: "#232627",
					900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
