import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open: true, // abre automaticamente o navegador
    port: 3000, // porta para conexão, altere quando necessario
    host: true, //habilita a rede externa
  },
})
