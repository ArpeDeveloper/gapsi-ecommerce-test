import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      manifest: {
        name: 'Gapsi e-Commerce',
        short_name: 'Gapsi E-Commerce',
        description: 'A basic e-commerce App',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/img/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
  ],
})
