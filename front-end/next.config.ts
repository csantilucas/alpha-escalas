// next.config.js (ou next.config.mjs)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",

  images: {
    domains: [],
  },
  
  typescript: {
    ignoreBuildErrors: false, 
  },

  // 🟢 Adiciona a permissão para o IP de rede e localhost não travarem o WebSocket/HMR
  allowedDevOrigins: ['192.168.1.27', 'localhost:3000']
};

export default nextConfig;