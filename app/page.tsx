import Link from 'next/link';
import getAllPhotoData from './lib/getAllPhotoData'

export default async function Page() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData;

  return (
    <section key="1">
      <h2>Image Data</h2>
      <br />
      {photos.map(photo => {
        return (
          <>
          <p key={photo.fileId}>
            <Link href={`/${photo.fileId}`}>{photo.fileId}</Link>
          </p>
          <br />
          </>
        )
      })}

    </section>

  )
}


