import { PhotoItems } from "../../types/types"

export default async function getFilterData (photos: PhotoItems[]) {
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