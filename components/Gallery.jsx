import Image from "next/image";
import Link from "next/link";

export default function Gallery({ photos }) {
    return (

        <div className="container mx-auto mb-4">
        <div className="flex flex-row flex-wrap justify-center">
          {photos && photos.map((photo, index) => (
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 overflow-hidden align-middle justify-center p-2" key={index}>
                <div className="relative w-full h-0 pt-1/1">
                    <Link as={`/photo/${photo.fileId}`} href={{pathname: "/", query: {"photo": photo.url, "caption": photo.customMetadata.Caption}}}>
                        <a>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src={photo.url}
                                className="absolute inset-0 w-full h-full"
                            />
                        </a>
                    </Link>
                </div>
            </div>
          ))}
        </div>
      </div>

    );
}