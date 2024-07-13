import { Metadata } from 'next'
import getAllPhotoData from '@/lib/getAllPhotoData'
import getPhotoData from '@/lib/getPhotoData'
import { notFound } from 'next/navigation'
import ImageDisplay from '@/components/ImageDisplay'

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
    <main className="fixed inset-0 flex items-center justify-center p-4">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <ImageDisplay modal={false} photo={photo} />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData

  return photos.map((photo) => ({
    id: photo.fileId,
  }))
}
