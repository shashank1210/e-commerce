import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/v1': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // No rewrite needed if backend expects /v1/auth/me
      },
    },
  },
})
