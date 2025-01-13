import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.jsx', // Entry for server-side rendering
    rollupOptions: {
      input: {
        client: 'src/entry-client.jsx', // Entry for client-side hydration
      },
    },
  },
});
