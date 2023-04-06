import Link from 'next/link';
import getAllPhotoData from './lib/getAllPhotoData'
import Gallery from './components/Gallery';
import getFilterData from './lib/getFilterData';

export default async function Page() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const tagsData: Promise<string[]> = getFilterData();

  const [photos, tags] = await Promise.all([
    photoData,
    tagsData
  ])

  return (
    <Gallery photos={photos} tags={tags}/>

  )
}


