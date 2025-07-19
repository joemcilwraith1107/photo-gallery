"use client";

import { useState } from "react";
import Filters from "@/components/Filters";
import ImageGrid from "@/components/ImageGrid";
import type { ImagesData } from "@/types";

type Params = {
	photos: ImagesData[];
	tags: string[];
};

export default function ImageGallery({ photos, tags }: Params) {
	const [filteredPhotos, setFilteredPhotos] = useState(photos);

	return (
		<>
			<Filters
				photos={photos}
				tags={tags}
				setFilteredPhotos={setFilteredPhotos}
			/>

			<ImageGrid images={filteredPhotos} />
		</>
	);
}
