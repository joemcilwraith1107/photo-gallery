import Image from "next/image";
import Link from "next/link";

type GalleryProps = {
	images: ImagesData[];
};

export default function ImageGrid({ images }: GalleryProps) {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image) => (
					<div
						key={image.fileId}
						className="relative aspect-square w-full overflow-hidden rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						<Link href={`/image/${image.fileId}`}>
							<Image
								src={image.url}
								alt={image.customMetadata.Caption}
								fill
								className="object-cover transition-transform duration-300 hover:scale-110"
								sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
