import { IKResponse, PhotoItems } from "../../types/types"


export default async function getAllPhotoData() {
    const results = await fetch(
      `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
      {
        headers: {
          Authorization: `${process.env.PRIVATE_HEADER}`,
        },
      }
    );

    return results.json();
  }