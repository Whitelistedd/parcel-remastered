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
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY  
  }
}

module.exports = nextConfig
