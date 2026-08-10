import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served at the custom apex domain padmagnanapriya.com (a GitHub Pages
// USER page) at the domain root, so the base path is '/' (default).
// Do NOT set a '/repo/' sub-path.
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
    // GitHub Pages on this repo serves from the master branch /docs folder,
    // so we emit the static build straight into docs/.
    outDir: 'docs',
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: true,
  },
  // vite-react-ssg prerenders these routes to static HTML at build time.
  ssr: {
    noExternal: ['motion', 'framer-motion'],
  },
})
