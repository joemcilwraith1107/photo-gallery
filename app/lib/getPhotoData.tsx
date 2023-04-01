import { IKResponse } from "../../types"

export default async function getPhotoData (id: string) {
    const result: IKResponse = await fetch(
      `${process.env.IK_API}/${id}/details`,
      {
        headers: {
          Authorization: `${process.env.PRIVATE_HEADER}`,
        },
      }
    ).then((res) => res.json());
    
    return {
      url: result.url,
      caption: result.customMetadata.Caption,
    }
  }