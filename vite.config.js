import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The components are written in .js files that contain JSX,
// so Vite is told to treat every .js file under src as JSX.
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' }
    }
  }
})
