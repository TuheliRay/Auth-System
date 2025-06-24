import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
// This configuration sets up a Vite project with React support and configures a proxy for API requests to the backend server running on port 5000.
// The proxy will forward requests from the frontend to the backend, allowing for seamless development without CORS issues.
// The `@vitejs/plugin-react` plugin is used to enable React features in the  Vite project.