"use client";

import Image from "next/image";
import type { PhotoData } from "@/types";

type Params = {
	photo: PhotoData;
};

export default function ImageContent({ photo }: Params) {
	const calculateImageDimensions = (photo: PhotoData) => {
		const maxWidth = window.innerWidth * 0.9;
		const maxHeight = window.innerHeight * 0.9;
		const aspectRatio = photo.width / photo.height;

		let width = photo.width;
		let height = photo.height;

		if (width > maxWidth) {
			width = maxWidth - 40;
			height = width / aspectRatio;
		}

		if (height > maxHeight) {
			height = maxHeight - 40;
			width = height * aspectRatio;
		}

		return { width, height };
	};
	return (
		<div className="flex flex-col">
			<div className="relative" style={calculateImageDimensions(photo)}>
				<Image
					src={photo.url}
					alt={photo.customMetadata.Caption}
					fill
					className="object-contain"
					sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 60vw"
					priority
				/>
			</div>
			<div className="relative">
				<p className="text-center text-lg font-normal text-slate-900">
					{photo.customMetadata.Caption}
				</p>
			</div>
		</div>
	);
}
