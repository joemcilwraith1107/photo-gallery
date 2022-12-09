import { AnimatePresence } from 'framer-motion'
import Gallery from './components/Gallery'
import { PhotoItems } from '../types/types'

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const items = await getData()
  const photos = await getPhotoData(items)
  const tags = await getFilterData(items)

  return (
    <>
      <Gallery photos={photos} tags={tags} />
    </>
  )
}

const getData = async () => {
  const results = await fetch(
    `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
    {
      headers: {
        Authorization: `${process.env.PRIVATE_HEADER}`,
      },
    }
  )

  // Recommendation: handle errors
  if (!results.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return results.json()
}

const getPhotoData = async (items: any) => {
  const photos: PhotoItems[] = items.map((item: any) => {
    return {
      id: item.fileId,
      url: item.url,
      caption: item.customMetadata.Caption,
      tags: item.tags,
    }
  })
  return photos
}

const getFilterData = async (items: any) => {
  let array = ['all']
  items.forEach((item: { tags: any; name: any }) => {
    let tags = item.tags
    if (tags == null) {
      console.log(`Untagged picture ${item.name}`)
    } else {
      for (let tag of tags) {
        array.push(tag)
      }
    }
  })
  return [...new Set(array)]
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const results = await fetch(
//     `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
//     {
//       headers: {
//         Authorization: `${process.env.PRIVATE_HEADER}`,
//       },
//     }
//   )
//   const items = await results.json()

//   const photos: PhotoItems = items.map((item: any) => {
//     return {
//       id: item.fileId,
//       url: item.url,
//       caption: item.customMetadata.Caption,
//       tags: item.tags,
//     }
//   })
//   const filters = async (items: any[]) => {
//     let array = ['all']
//     items.forEach((item: { tags: any; name: any }) => {
//       let tags = item.tags
//       if (tags == null) {
//         console.log(`Untagged picture ${item.name}`)
//       } else {
//         for (let tag of tags) {
//           array.push(tag)
//         }
//       }
//     })
//     return [...new Set(array)]
//   }

//   const tags = await filters(items)
//   return {
//     props: { photos, tags },
//   }
// }
