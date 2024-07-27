import {defineConfig} from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron/simple'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main:{
        entry: 'electron/index.ts',
      },
      preload: {
        input: path.join(__dirname, "electron/preload.ts"),
      },
    }),
  ],
  server: { port: 8888 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
