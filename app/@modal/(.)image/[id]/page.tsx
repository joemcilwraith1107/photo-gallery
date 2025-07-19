import ImageContent from "@/components/ImageContent";
import Modal from "@/components/Modal";
import getPhotoData from "@/lib/getPhotoData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{
		id: string;
	}>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;

    const {
        id
    } = params;

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

export default async function Page(props: Props) {
    const params = await props.params;

    const {
        id
    } = params;

    const photoData: Promise<PhotoData> = getPhotoData(id);
    const photo: PhotoData = await photoData;

    if (!photo.url) return notFound();
    return (
		<Modal>
			<ImageContent photo={photo} />
		</Modal>
	);
}
