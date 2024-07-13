'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Filters from '@/components/Filters'
import ImageGrid from '@/components/ImageGrid'

type Params = {
  photos: ImagesData[]
  tags: string[]
}

export default function Gallery({ photos, tags }: Params) {
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
