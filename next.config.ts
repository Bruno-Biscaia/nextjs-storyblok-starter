// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // outros domínios que você já usa,
      'a.storyblok.com'
    ],
  },
}

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
