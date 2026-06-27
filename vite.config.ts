import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// padmagnanapriya.github.io is a USER page served at the domain root,
// so the base path is '/' (default). Do NOT set a '/repo/' sub-path.
export default defineConfig({
  base: '/',
  plugins: [
    react({
      // React Compiler — the "new compiler" that auto-memoizes components.
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
    tailwindcss(),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
  // vite-react-ssg prerenders these routes to static HTML at build time.
  ssr: {
    noExternal: ['motion', 'framer-motion'],
  },
})
