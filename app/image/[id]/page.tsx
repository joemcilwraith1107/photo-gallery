import ImageContent from "@/components/ImageContent";
import getPhotoData from "@/lib/getPhotoData";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	const photoData: Promise<PhotoData> = getPhotoData(id);
	const photo: PhotoData = await photoData;

	if (!photo.name) {
		return {
			title: "Image not found",
		};
	}

	return {
		title: photo.name,
		description: photo.customMetadata.Caption,
	};
}

export default async function ImagePage({ params: { id } }: Props) {
	const photo: PhotoData = await getPhotoData(id);

	if (!photo) {
		notFound();
	}

	return (
		<div className="relative min-h-screen flex items-center justify-center bg-white">
			<Link
				href="/"
				className="absolute top-4 left-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
			>
				Back to Gallery
			</Link>
			<ImageContent photo={photo} />
		</div>
	);
}
