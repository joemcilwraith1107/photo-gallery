import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageDisplay({photo}: ImageDisplay) {

  return (
    <div className="flex flex-col h-screen-80 w-auto justify-center">
      <Image
        priority={true}
        height={photo.height}
        width={photo.width}
        sizes="100vh"
        style={{height: '100%', width: 'auto'}}
        className="bg-white p-4"
        src={photo.url}
        alt={photo.customMetadata.Caption}
      />
    </div>
  )
}
