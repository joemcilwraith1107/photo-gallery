import ImageContent from "@/components/ImageContent";
import Modal from "@/components/Modal";
import getPhotoData from "@/lib/getPhotoData";
import type { Metadata } from "next";
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

export default async function Page({ params: { id } }: Props) {
	const photoData: Promise<PhotoData> = getPhotoData(id);
	const photo: PhotoData = await photoData;

	if (!photo.url) return notFound();
	return (
		<Modal>
			<ImageContent modal={true} photo={photo} />
		</Modal>
	);
}
