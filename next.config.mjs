
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2160],
    domains: ['res.cloudinary.com'],
    loader: "default"
  },
}

export default config;
