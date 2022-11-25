import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ImageDisplayProps } from '../types/types';

export default function ImageDisplay({ modal, photo, caption }: ImageDisplayProps) {
  const bgClass: string = 'flex flex-col h-full w-full';
  const fontClass: string = "font-sans text-2xl";
  
  return (
    <div
      className={
        modal == true
          ? `${bgClass} bg-black bg-opacity-80`
          : `${bgClass} bg-white`
      }
    >
      <div className="flex flex-none basis-1/12 flex-row">
        <div className="basis-1/12"></div>
        <div className="basis-11/12 self-center">
          {modal ? (
            <div></div>
          ) : (
            <Link href="/">
              <p
                className="font-sans text-2xl text-black"
              >
                &#x21E6; Back to Gallery
              </p>
            </Link>
          )}
        </div>
        <div className="z-50 basis-1/12 self-center">
          {modal ? (
            <Link href="/">
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer self-center"
                size="3x"
                color="white"
              />
            </Link>
          ) : (
            <div></div>
          )}
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
              src={photo}
              alt={caption}
            />
          </div>
        </div>
        <div className="flex flex-none basis-1/12 justify-center"></div>
      </div>
      <div className="flex basis-1/12 flex-row justify-center">
        <div className="flex flex-none basis-1/12 justify-center"></div>
        <div className="flex basis-11/12 justify-center self-center">
          <p
            className={
              modal == true
                ? `${fontClass} text-white`
                : `${fontClass} text-black`
            }
          >
            {caption}
          </p>
        </div>
        <div className="flex flex-none basis-1/12 justify-center"></div>
      </div>
    </div>
  )
}
