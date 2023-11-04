import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type GalleryProps = {
  filteredPhotos: PhotosData[]
}
export default function ImageGrid({ filteredPhotos }: GalleryProps) {
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
              <Link href={`photos/${photo.public_id}`}>
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_320/${photo.public_id}.jpg`}
                  fill={true}
                  className={'object-cover'}
                  alt={`${photo.public_id}`}
                  sizes="320px"
                />
              </Link>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
