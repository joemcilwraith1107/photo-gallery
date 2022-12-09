import { Dispatch, SetStateAction } from 'react'

export interface GalleryProps {
  photos: PhotoItems[]
  tags: string[]
}

export interface ModalProps {
  onClose: () => void
  children: any
}

export interface ImageGridProps {
  filteredPhotos: PhotoItems[]
}

export interface FilterProps {
  photos: PhotoItems[]
  tags: string[]
  setFilteredPhotos: Dispatch<SetStateAction<PhotoItems[]>>
}

export interface PhotoProps {
  photo: string
  caption: string
}

export interface ImageDisplayProps {
  modal: boolean
  photo: string
  caption: string
}

export interface PhotoItems {
  id: string
  url: string
  caption: string
  tags: string[]
}
