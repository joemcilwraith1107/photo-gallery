import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GalleryProps } from '../types/types'

export default function Gallery({filteredPhotos}: GalleryProps) {

  return (
    <div className="container mx-auto mb-4">
      <div className="grid grid-cols-photo justify-center gap-2">
        {filteredPhotos &&
          filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
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
                as={`/photo/${photo.id}`}
                href={{
                  pathname: '/',
                  query: {
                    photo: photo.url,
                    caption: photo.caption,
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
