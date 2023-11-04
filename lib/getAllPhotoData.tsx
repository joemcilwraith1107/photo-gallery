import cloudinary from './cloudinary'

export default async function getAllPhotoData(): Promise<PhotosData[]> {
  const results = await cloudinary.api.resources_by_asset_folder("Portfolio", {tags: true, metadata: true})

  let reducedResults: PhotosData[] = []
  let i = 0

  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      tags: result.tags,
      public_id: result.public_id,
    });
    i++
  }

  return reducedResults;

}
