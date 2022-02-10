import Image from "next/image";
import Link from "next/link";

export default function ImagePreview({ thumbnailUrl, fileId }) {
    return (
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 overflow-hidden align-middle justify-center p-2" key={fileId}>
            <div className="relative w-full h-0 pt-1/1">
                <Link as={`/photo/${fileId}`} href="/photo/[id]">
                    <a>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={thumbnailUrl}
                            className="absolute inset-0 w-full h-full"
                        />
                    </a>
                </Link>
            </div>

        </div>
    );
}