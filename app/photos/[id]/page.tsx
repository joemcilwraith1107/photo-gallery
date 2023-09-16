import { Metadata } from 'next'
import getAllPhotoData from '@lib/getAllPhotoData'
import getPhotoData from '@lib/getPhotoData'
import { notFound } from 'next/navigation'
import ImageDisplay from '@components/ImageDisplay'

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
    <>
      <div className="grid-cols-12 grid-rows-12 gap-0">
        <div className="col-span-10 col-start-2 row-span-11 row-start-1">
          <div className="fixed inset-0 h-full w-full">
            <ImageDisplay modal={false} photo={photo} />
          </div>
        </div>
        <div className="col-span-10 col-start-2">
          <p className="font-sans text-2xl">{photo.customMetadata.Caption}</p>
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData

  return photos.map((photo) => ({
    id: photo.fileId,
  }))
}
