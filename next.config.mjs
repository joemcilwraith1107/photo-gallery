/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: false,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2160],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				pathname: "/ziadpvldoaq/Portfolio/**",
			},
		],
		loader: "default",
	},
	experimental: {
		missingSuspenseWithCSRBailout: false
	}
};

export default config;
