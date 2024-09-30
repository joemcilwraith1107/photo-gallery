import getAllPhotoData from "@/lib/getAllPhotoData";
import getPhotoData from "@/lib/getPhotoData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ImagePage({
	params,
}: { params: { id: string } }) {
	const image: PhotoData = await getPhotoData(params.id);

	if (!image) {
		notFound();
	}

	return (
		<div className="relative min-h-screen flex items-center justify-center bg-gray-900">
			<Link
				href="/"
				className="absolute top-4 left-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
			>
				Back to Gallery
			</Link>
			<Image
				src={image.url}
				alt={image.customMetadata.Caption}
				fill
				className="object-contain"
				sizes="100vw"
				priority
			/>
		</div>
	);
}

export async function generateStaticParams() {
	const photoData: Promise<ImagesData[]> = getAllPhotoData();
	const photos: ImagesData[] = await photoData;

	return photos.map((photo) => ({
		id: photo.fileId,
	}));
}
