import Image from "next/image";
import Link from "next/link";

export default function ImagePreview({ key, thumbnailUrl, fileId }) {
    return (
        <div className="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 overflow-hidden align-middle justify-center p-2 " key={key}>
                <Link as={`/photo/${fileId}`} href="/photo/[id]">
                    <a>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={thumbnailUrl}
                            className="aspect-square"
                        />
                    </a>
                </Link>
        </div>
    );
}