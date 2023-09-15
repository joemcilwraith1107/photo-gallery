
import Image from 'next/image';
import { getPlaiceholder } from "plaiceholder";

export default async function ImageDisplay({ modal, photo }: ImageDisplay) {

  const ratio = `aspect-[${photo.width}/${photo.height}]`
  return (
    <>
      {modal ? (
        <div className={`relative flex flex-col bg-white p-4 max-w-[90%] max-h-[90%] ${ratio}`}>
          <div className="absolute inset-0 mx-auto flex flex-col">
            <div className="right-0 top-0 flex items-center p-4">
              <div className="rounded-full bg-black/60 text-white/75 hover:bg-black hover:text-white sm:p-2 md:p-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            priority={true}
            className="h-full w-full"
            height={photo.height}
            width={photo.width}
            sizes="100vw"
            src={photo.url}
            alt={photo.customMetadata.Caption}
          />
        </div>
      ) : (
        <div className="relative h-full w-auto">
          <Image
            fill={true}
            priority={true}
            sizes="100vh"
            className="object-contain"
            src={photo.url}
            alt={photo.customMetadata.Caption}
          />
        </div>
      )}
    </>
  )
}
