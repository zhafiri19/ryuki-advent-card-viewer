import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'zhafiri19.github.io/ryuki-advent-card-viewer/',
  plugins: [react()],
})
