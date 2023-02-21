/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.chucknorris.io',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
