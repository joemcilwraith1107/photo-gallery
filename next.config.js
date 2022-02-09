/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2160],
    domains: ['ik.imagekit.io'],
    loader: "default"
  },
}
