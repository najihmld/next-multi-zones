// tailwind.config.ts (di root)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
