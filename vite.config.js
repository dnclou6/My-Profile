import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base when deploying to GitHub Pages under a repository subpath
  // Replace 'my-profile' if your repository name is different
  base: process.env.NODE_ENV === 'production' ? '/my-profile/' : '/',
})
