import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/app/actions": [
      "./public/db1_X.sqlite",
      "./node_modules/sql.js/dist/sql-wasm.wasm"
    ]
  }
};

export default nextConfig;
