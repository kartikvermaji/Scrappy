import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true, // 👈 this exposes your server to the local network
    port: 5173  // or whatever port you're using
  }

})
