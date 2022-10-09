const headers = require('./headers.json')
const rewrites = require('./rewrites.json')

const nextConfig = {
  async headers() {
    return headers
  },
  async rewrites() {
    return rewrites
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: '.next/static',
  disable: process.env.NODE_ENV === 'development',
  sw: 'service-worker.js',
  register: true,
});

module.exports = withPWA(nextConfig);
