"use client";

import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

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

	const iconClass =
		"fixed fixed bottom-32 right-14 items-center justify-center lg:h-14 lg:w-14 h-10 w-10";

	return (
		<>
			{showScroll && (
				<Button
					variant="outline"
					className="fixed bottom-32 right-14 2xl:right-40 p-2 rounded-full text-primary-foreground shadow-lg transition-opacity duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					onClick={scrollToTop}
					aria-label="Scroll to top"
				>
					<ChevronUpIcon className="h-6 w-6" />
				</Button>
			)}
		</>
	);
}
