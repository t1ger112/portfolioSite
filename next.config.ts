import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  outputFileTracingIncludes: {
    "/app/actions": [
      "./public/db1_X.sqlite",
      "./node_modules/sql.js/dist/sql-wasm.wasm"
    ]
  },

  images: {
    qualities: [25, 50, 75, 100],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@t1ger-112',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'youtube.freddierobinson.com' }],
        destination: 'https://www.youtube.com/@t1ger-112',
        permanent: false,
      },
    ]
  },

};

export default nextConfig;
