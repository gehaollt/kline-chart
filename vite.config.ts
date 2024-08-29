/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {
      external: ['klinecharts'],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'klinechart-view.css'
          }
        },
        globals: {
          klinecharts: 'klinecharts',
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'klinechartspro',
      fileName: (format) => {
        if (format === 'es') {
          return 'klinechart-view.js'
        }
        if (format === 'umd') {
          return 'klinechart-view.umd.js'
        }
      },
    },
  },
})
