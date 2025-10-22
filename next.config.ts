import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{
      protocol: "https",
      hostname: "dpc-gmni-blitar.vercel.app/",
      pathname: "/**"
    }]
  }

};

export default nextConfig;
