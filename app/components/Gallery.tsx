'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Filters from './Filters'
import ImageGrid from '../../pages/old/ImageGrid'
import { IKResponse } from '../../types'
import getAllPhotoData from '../lib/getAllPhotoData'

export default async function Gallery() {

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
