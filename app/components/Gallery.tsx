'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GalleryProps } from '../../types/types'
import Filters from './Filters'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import { useRouter, useSearchParams } from 'next/navigation'
import ImageDisplay from './ImageDisplay'

export default function Gallery({ photos, tags }: GalleryProps) {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  const params = useSearchParams();
  const router = useRouter();
  let photoURL = params?.get('photo') as string;
  let photoCaption = params?.get('caption') as string;
  let photoRouter = params?.has('photo');
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
            photo={photoURL}
            caption={photoCaption}
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
