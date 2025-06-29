import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5174,       // You can change the port if needed
  },
})
