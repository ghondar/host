import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext"
  },
  server: {
    host: true,
    port: 9090
  },
  preview: {
    host: true,
    port: 9090
  },
  cacheDir: "node_modules/.cacheDir",
  plugins: [
    react(),
    federation({
      remotes:{
        remote_app: 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', '@mui/material', '@mui/styled-engine-sc', 'styled-components','@mui/material']
    })
  ]
})
