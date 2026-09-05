import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you ever deploy to GitHub Pages instead of Vercel/Netlify,
// set base to '/<your-repo-name>/' (see README - Deploying).
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    open: true,
  },
})
