import cloudinary from './cloudinary'

export default async function getPhotoData (id: string): Promise<PhotoData> {
  const result: PhotoData = await cloudinary.api.resource(id)
  
  return result;
  }