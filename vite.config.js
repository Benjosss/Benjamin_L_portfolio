import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base : "/Benjamin_L_portfolio/",
  server: {
    host: true, // permet d'exposer le serveur sur le réseau local
    port: 5173  // ou le port que tu utilises
  },
})
