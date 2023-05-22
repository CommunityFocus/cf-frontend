import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import EnvironmentPlugin from 'vite-plugin-environment';
import dns from 'dns'

// this will force the localhost dns to be "127.0.0.1" instead of "localhost"
dns.setDefaultResultOrder('ipv4first')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  EnvironmentPlugin(
      'all'
    )
  ],
  server: {
    // this will force the port number to always be 5173
    strictPort: true,
  }
})
