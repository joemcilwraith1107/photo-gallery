"use client";

import { ChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop({ showDistance = 300 }) {
	const [showScroll, setShowScroll] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > showDistance) {
				setShowScroll(true);
			} else {
				setShowScroll(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [showDistance]);

	return (
		<>
			{showScroll && (
				<Button
					variant="ghost"
					size={"icon-xl"}
					className="fixed bottom-24 right-10 lg:bottom-36 2xl:right-80 p-2 rounded-full text-secondary-foreground shadow-lg transition-opacity duration-300 hover:ring-2 hover:ring-primary focus:outline-hidden focus:ring-2 focus:ring-primary bg-white"
					onClick={scrollToTop}
					aria-label="Scroll to top"
				>
					<ChevronUpIcon className="size-12 text-primary" />
				</Button>
			)}
		</>
	);
}
