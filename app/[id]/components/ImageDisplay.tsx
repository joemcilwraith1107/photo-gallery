import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

type Params = {
  photo: PhotoData
}
export default function ImageDisplay({ photo }: Params) {
  return (
    <div className="w-fullbg-white flex h-full flex-col">
      <div className="flex flex-none basis-1/12 flex-row">
        <div className="basis-1/12"></div>
        <div className="basis-11/12 self-center">
          <Link href="/">
            <p className="font-sans text-2xl text-black">
              &#x21E6; Back to Gallery
            </p>
          </Link>
        </div>
        <div className="z-50 basis-1/12 self-center">
          <Link href="/">
            <FontAwesomeIcon
              icon={faTimes}
              className="cursor-pointer self-center"
              size="3x"
              color="white"
            />
          </Link>
        </div>
      </div>
      <div className="flex basis-11/12 flex-row justify-center">
        <div className="flex flex-none basis-1/12 justify-center"></div>
        <div className="basis-11/12">
          <div className="relative z-50 h-full w-auto">
            <Image
              fill={true}
              priority={true}
              className="object-contain"
              src={photo.url}
              alt={photo.customMetadata.Caption}
            />
          </div>
        </div>
        <div className="flex flex-none basis-1/12 justify-center"></div>
      </div>
      <div className="flex basis-1/12 flex-row justify-center">
        <div className="flex flex-none basis-1/12 justify-center"></div>
        <div className="flex basis-11/12 justify-center self-center">
          <p className="text-2xltext-black font-sans">
            {photo.customMetadata.Caption}
          </p>
        </div>
        <div className="flex flex-none basis-1/12 justify-center"></div>
      </div>
    </div>
  )
}
