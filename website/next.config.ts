import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modo de desenvolvimento - removido 'output: export'
  basePath: process.env.NODE_ENV === 'production' ? '/GovindaSystemsChurchDAO' : '',
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
