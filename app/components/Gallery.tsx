'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GalleryProps } from '../../types/types'
import Filters from './Filters'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import { useRouter } from 'next/router'

export default function Gallery({ photos, tags }: GalleryProps) {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  const router = useRouter()
  let photoRouter = router.query.photo as string
  let captionRouter = router.query.caption as string
  return (
    <>
      {photoRouter && (
        <Modal
          onClose={() => {
            router.push('/')
          }}
        >
          <ImageDisplay
            modal={true}
            photo={photoRouter}
            caption={captionRouter}
          />
        </Modal>
      )}
      <Filters
        photos={photos}
        tags={tags}
        setFilteredPhotos={setFilteredPhotos}
      />
      <AnimatePresence>
        <ImageGrid filteredPhotos={filteredPhotos} />
      </AnimatePresence>
    </>
  )
}
