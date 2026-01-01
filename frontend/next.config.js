/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
  // Ensure proper image optimization
  images: {
    unoptimized: false,
  },
  // Exclude old src folder from build
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  },
  // Ignore old src directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

module.exports = nextConfig

