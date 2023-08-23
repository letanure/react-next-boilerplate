/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: isProd,
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  register: true,
})

module.exports = withPWA(nextConfig)
