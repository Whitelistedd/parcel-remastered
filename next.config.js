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
}

module.exports = nextConfig
