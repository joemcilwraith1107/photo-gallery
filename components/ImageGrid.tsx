import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type GalleryProps = {
  filteredPhotos: ImagesData[]
}
export default function ImageGrid({ filteredPhotos }: GalleryProps) {

  return (
    <div className="container mx-auto mb-4">
      <div className="grid grid-cols-photo justify-center gap-2">
        {filteredPhotos &&
          filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.fileId}
              className={'relative h-300 w-300 justify-self-center'}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { ease: 'linear', duration: 1 },
                layout: { duration: 0.7 },
              }}
            >
              <Link href={`photos/${photo.fileId}`}>
                <Image
                  src={photo.url}
                  fill={true}
                  className={'object-cover'}
                  alt={`${photo.customMetadata.Caption}`}
                  sizes="320px"
                />
              </Link>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
