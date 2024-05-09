import { Metadata } from 'next'
import getAllPhotoData from '@/lib/getAllPhotoData'
import getPhotoData from '@/lib/getPhotoData'
import { notFound } from 'next/navigation'
import ImageDisplay from '@/components/ImageDisplay'
import Modal from '@/components/Modal'

type Params = {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const photoData: Promise<PhotoData> = getPhotoData(id)
  const photo: PhotoData = await photoData

  if (!photo.name) {
    return {
      title: 'Image not found',
    }
  }

  return {
    title: photo.name,
    description: photo.customMetadata.Caption,
  }
}

export default async function Page({ params: { id } }: Params) {
  const photoData: Promise<PhotoData> = getPhotoData(id)
  const photo: PhotoData = await photoData

  if (!photo.url) return notFound()
  return (
    <Modal>
      <ImageDisplay modal={true} photo={photo} />
    </Modal>
  )
}

export async function generateStaticParams() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData

  return photos.map((photo) => ({
    id: photo.fileId,
  }))
}
