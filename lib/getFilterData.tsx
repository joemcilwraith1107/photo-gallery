import getAllPhotoData from './getAllPhotoData'

export default async function getFilterData() {
  const photoData: Promise<ImagesData[]> = getAllPhotoData()
  const photos: ImagesData[] = await photoData

  let array = ['all']
  photos.forEach((photo) => {
    let tags = photo.tags
    if (tags == null) {
      console.log(`Untagged picture ${photo.fileId}`)
    } else {
      for (let tag of tags) {
        array.push(tag)
      }
    }
  })
  return [...new Set(array)]
}
