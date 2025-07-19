"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

export default function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const handleOpenChange = () => {
		router.back();
	};
	return (
		<Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
			<DialogHeader>
				<DialogTitle>
					<VisuallyHidden.Root>Image Modal</VisuallyHidden.Root>
				</DialogTitle>
			</DialogHeader>
			<DialogContent className="max-w-90 max-h-90 h-auto w-auto p-1 overflow-hidden">
				<div className="relative w-full h-full flex flex-col items-center justify-center">
					{children}
					<DialogClose
						className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-hidden focus:ring-1 focus:ring-white"
						aria-label="Close modal"
					>
						<X className="h6 w-6" />
						<span className="sr-only">Close</span>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
}
