'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type Params = {
  photos: ImagesData[]
}

export default function Gallery({ photos }: Params) {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)

  return (
    <>
      <Filters
        photos={photos}
        setFilteredPhotos={setFilteredPhotos}
      />
      <AnimatePresence>
        <ImageGrid filteredPhotos={filteredPhotos} />
      </AnimatePresence>
    </>
  )
}
