import { Button } from "@/components/ui/button";
import type { Dispatch, SetStateAction } from "react";

type Params = {
	photos: ImagesData[];
	tags: string[];
	setFilteredPhotos: Dispatch<SetStateAction<ImagesData[]>>;
};

export default async function Filters({
	photos,
	tags,
	setFilteredPhotos,
}: Params) {
	async function filteredList(tag: string, index: number) {
		const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
		index === 0 ? setFilteredPhotos(photos) : setFilteredPhotos(filteredPhotos);
	}

	const menu = tags.map((tag, index) => (
		<Button
			key={tag}
			variant="link"
			value={`${tag}`}
			onClick={async () => {
				await filteredList(tag, index);
			}}
		>
			<p>{`${tag}`}</p>
		</Button>
	));

	return (
		<header className="container mx-auto flex flex-row items-center justify-between space-x-4 bg-white px-6 py-6">
			<nav className="content center p flex w-full flex-row flex-wrap justify-center">
				{menu}
			</nav>
		</header>
	);
}
