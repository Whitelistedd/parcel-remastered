/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = {
  images: {
    domains: ["www.ordertracker.com"],
  },
  env: {
    NEXT_KEY: process.env.NEXT_PUBLIC_KEY,
    NEXT_URL: process.env.NEXT_URL
  }
}

module.exports = nextConfig
