import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
    // Si el comando es 'serve' (npm run dev), usa '/'
    // Si el comando es 'build' (npm run build), usa '/hospital-his-site/'
    base: command === 'serve' ? '/' : '/hospital-his-site/',
  }
})