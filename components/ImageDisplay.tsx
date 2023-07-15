import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const extraClasses = modal
    ? 'max-h-screen-80 max-w-screen-80 bg-white p-4'
    : ''
  return (
    <>
      {modal ? (
        <div className="flex max-h-screen-80 max-w-screen-80 flex-col bg-white p-4">
          <Image
            priority={true}
            height={photo.height}
            width={photo.width}
            sizes="100vh"
            className="h-full w-full"
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
