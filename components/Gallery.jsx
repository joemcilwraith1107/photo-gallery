import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { PhotoContext } from '../pages'

export default function Gallery() {
  const { filteredPhotos } = useContext(PhotoContext)
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
              <Link
                as={`/photo/${photo.fileId}`}
                href={{
                  pathname: '/',
                  query: {
                    photo: photo.url,
                    caption: photo.customMetadata.Caption,
                  },
                }}
              >
                <Image
                  src={photo.url}
                  fill={true}
                  className={'object-cover'}
                  alt=""
                />
              </Link>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
