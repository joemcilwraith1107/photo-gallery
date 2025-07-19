import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import ScrollToTop from "@/components/ScrollToTop";
import getAllPhotoData from "@/lib/getAllPhotoData";
import getFilterData from "@/lib/getFilterData";
import type { ImagesData } from "@/types";

export default async function Page() {
	const photoData: Promise<ImagesData[]> = getAllPhotoData();
	const tagsData: Promise<string[]> = getFilterData();

	const [photos, tags] = await Promise.all([photoData, tagsData]);

	return (
		<div className="flex h-screen flex-col justify-between">
			<main className="shrink basis-11/12">
				<ImageGallery photos={photos} tags={tags} />
			</main>
			<ScrollToTop />
			<Footer />
		</div>
	);
}
