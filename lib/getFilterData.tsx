import getAllPhotoData from "@/lib/getAllPhotoData";
import type { ImagesData } from "@/types";

export default async function getFilterData() {
	const photoData: Promise<ImagesData[]> = getAllPhotoData();
	const photos: ImagesData[] = await photoData;

	const array = ["all"];
	for (const photo of photos) {
		const tags = photo.tags;
		if (tags == null) {
			console.log(`Untagged picture ${photo.fileId}`);
		} else {
			for (const tag of tags) {
				array.push(tag);
			}
		}
	}
	return [...new Set(array)];
}
