/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ['ik.imagekit.io'],
    path: "_next/image",
    loader: "default"
  },
}
