'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Filters from './Filters'
import ImageGrid from '../../pages/old/ImageGrid'
import { IKResponse } from '../../types/types'
import getAllPhotoData from '../lib/getAllPhotoData'

export default async function Gallery() {
  const photoData: Promise<IKResponse[]> = getAllPhotoData();
  const photos = await photoData;
  //const tags = await getFilterData(photos)
  const [filteredPhotos, setFilteredPhotos] = useState(photos)

  console.log(filteredPhotos);

  return (
    <>
      {/* <Filters
        photos={photos}
        tags={tags}
        setFilteredPhotos={setFilteredPhotos}
      /> */}
      {/* <AnimatePresence>
        <ImageGrid filteredPhotos={filteredPhotos} />
      </AnimatePresence>
    </> */}
    </>
  )
}
