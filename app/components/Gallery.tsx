'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GalleryProps } from '../../types/types'
import Filters from './Filters'
import ImageGrid from './ImageGrid'

export default function Gallery({ photos, tags }: GalleryProps) {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  return (
    <>
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
