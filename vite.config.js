import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rest': {
        target: 'http://api-rest.infinityfreeapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest/, '/rest'),
      },
    },
  },
})

