import { AnimatePresence } from 'framer-motion'
import Gallery from './components/Gallery'
import { IKResponse, PhotoItems } from '../types/types'

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const photos = await getData();
  const tags = await getFilterData(photos)

  return (
    <>
      <Gallery photos={photos} tags={tags} />
    </>
  )
}

const getData: () => Promise<PhotoItems[]> = async () => {
  const results = await fetch(
    `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
    {
      headers: {
        Authorization: `${process.env.PRIVATE_HEADER}`,
      },
    }
  ).then((res) => res.json());
  return results.map((result: IKResponse) => ({
    id: result.fileId,
    url: result.url,
    caption: result.customMetadata.Caption,
    tags: result.tags,
  }));
}



const getFilterData = async (photos: PhotoItems[]) => {
  let array = ['all']
  photos.forEach((photo: PhotoItems) => {
    let tags = photo.tags
    if (tags == null) {
      console.log(`Untagged picture ${photo.id}`)
    } else {
      for (let tag of tags) {
        array.push(tag)
      }
    }
  })
  return [...new Set(array)]
}
