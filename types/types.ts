import { Dispatch, SetStateAction } from 'react'

export interface HomeProps {
  photos: PhotoItems[]
  tags: PhotoTags[]
}

export interface ModalProps {
  onClose: () => void
  children: any
}

export interface GalleryProps {
  filteredPhotos: PhotoItems[]
}

export interface FilterProps {
  photos: PhotoItems[]
  tags: PhotoTags[]
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

export interface PhotoTags {
  tag: string
}
