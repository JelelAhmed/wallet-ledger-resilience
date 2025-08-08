import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [],
  extend: { borderWidth: { "1.5": "1.5px" } },
};

export default config;
