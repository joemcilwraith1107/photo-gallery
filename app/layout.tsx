import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

config.autoAddCss = false;

export const metadata: Metadata = {
	title: "Photo Gallery",
	description: "A photo gallery using nextjs",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout(props: LayoutProps) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn("font-sans", montserrat.variable)}
		>
			<body>
				{props.modal}
				{props.children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
