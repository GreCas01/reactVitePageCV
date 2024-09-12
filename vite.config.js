import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['i18next', 'react-i18next'], // Mark i18next libraries as external
      // ... other rollup options
    },
  },
})
