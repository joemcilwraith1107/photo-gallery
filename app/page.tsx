import Link from 'next/link';
import getAllPhotoData from './lib/getAllPhotoData'
import Gallery from './components/Gallery';

export default async function Page() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData;

  return (
    <Gallery photos={photos}/>

  )
}


