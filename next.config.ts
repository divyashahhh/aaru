import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Builds plain files into out/, which Cloudflare Workers serves */
  output: "export",
  /* Image resizing needs a server, so photos are served as they are */
  images: { unoptimized: true },
};

export default nextConfig;
