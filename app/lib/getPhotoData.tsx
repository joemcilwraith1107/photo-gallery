
export default async function getPhotoData (id: string) {
    const result = await fetch(
      `${process.env.IK_API}/${id}/details`,
      {
        headers: {
          Authorization: `${process.env.PRIVATE_HEADER}`,
        },
      }
    )
    if (!result.ok) throw new Error(`Failed to fetch photo data for image ${id}`);

    return result.json()
    

  }