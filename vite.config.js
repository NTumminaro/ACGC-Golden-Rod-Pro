import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// Vite seems to be like our server js? its doing something on the backend thats running the localhost to port 5173? Neat though, not sure if we want to replace it with what we know