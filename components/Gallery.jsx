import Image from 'next/image'
import Link from 'next/link'
import { motion, LayoutGroup } from 'framer-motion'

export default function Gallery({ photos }) {
  return (
    <div className="container mx-auto mb-4">
      <motion.div layout className="flex flex-row flex-wrap justify-center">
        {photos &&
          photos.map((photo, index) => (
            <motion.div
              layout
              className="flex w-full justify-center overflow-hidden p-2 align-middle sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={index}
            >
              <div className="relative h-0 w-full pt-1/1">
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
                    fill={true}
                    src={photo.url}
                    className="absolute inset-0 h-full w-full object-cover"
                    alt=""
                  />
                </Link>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}
