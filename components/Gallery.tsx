'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Filters from './Filters'
import ImageGrid from './ImageGrid'
import { useSearchParams, useRouter } from 'next/navigation';
import Modal from './Modal'
import ImageDisplay from './ImageDisplay'

type Params = {
  photos: ImagesData[],
  tags: string[]
}

export default function Gallery({ photos, tags }: Params) {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  const router = useRouter()
  const searchParams = useSearchParams()
  const photo = searchParams?.get('photo')
  const caption = searchParams?.get('caption') ?? ''

  return (
    <>
    {photo && (
        <Modal
          onClose={() => {
            router.push('/')
          }}
        >
          <ImageDisplay
            modal={true}
            photo={photo}
            caption={caption}
          />
        </Modal>
      )}
      <Filters photos={photos} tags={tags} setFilteredPhotos={setFilteredPhotos} />
      <AnimatePresence>
        <ImageGrid filteredPhotos={filteredPhotos} />
      </AnimatePresence>
    </>
  )
}
