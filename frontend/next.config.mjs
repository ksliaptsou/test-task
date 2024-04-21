/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_URL: process.env["API_URL"],
    API_TOKEN: `Bearer ${process.env["API_TOKEN"]}`,
  },
};

export default nextConfig;
