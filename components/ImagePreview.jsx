import Image from "next/image";
import Link from "next/link";

export default function ImagePreview({ thumbnailUrl, fileId }) {
    return (
        <Link as={`/photo/${fileId}`} href="/photo/[id]">
            <a>
                <div className="relative aspect-square" key={fileId}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={thumbnailUrl}
                    />
                </div>
            </a>
        </Link>
    );
}