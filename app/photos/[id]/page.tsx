import { Metadata } from 'next'
import getAllPhotoData from '@lib/getAllPhotoData'
import getPhotoData from '@lib/getPhotoData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
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
      <div className="p-4 flex h-full w-auto flex-col">
        <div className="flex basis-11/12 flex-row justify-center">
          <div className="flex flex-col basis-1/12 justify-center"></div>
          <div className="basis-11/12">
            <ImageDisplay modal={false} photo={photo} />
          </div>
          <div className="flex flex-col basis-1/12 justify-center"></div>
        </div>
        <div className="flex basis-1/12 flex-row justify-center">
          <div className="flex flex-col basis-1/12 justify-center"></div>
          <div className="flex basis-11/12 justify-center items-center">
            <p className="font-sans text-2xl">{photo.customMetadata.Caption}</p>
          </div>
          <div className="flex flex-none basis-1/12 justify-center"></div>
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
