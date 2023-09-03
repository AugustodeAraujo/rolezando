import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#252B48',
        land: '#5B9A8B',
        hightlight: '#F7E987',
        support: '#445069',
        white: '#eeeeee'
      }
    }
  },
  plugins: [],
  mode: 'jit'
}
export default config
