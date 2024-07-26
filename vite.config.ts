import { defineConfig } from 'vite'
import * as path from "path";
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),electron({
    entry: 'electron/main.ts',
  })],
  server: { port: 8888 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: { outDir: "build" },
})
