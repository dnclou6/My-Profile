import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use env var to control base path.
// Default '/' works for Vercel and most hosts.
// For GitHub Pages, set VITE_BASE to '/<repo>/' during build.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
