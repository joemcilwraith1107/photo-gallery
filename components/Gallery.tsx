'use client'

import Filters from '@/components/Filters'
import { useState } from 'react'
import ImageGallery from './ImageGallery'

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

        <ImageGallery images={filteredPhotos} />


    </>
  )
}
