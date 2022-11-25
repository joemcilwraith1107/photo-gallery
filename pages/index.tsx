import { useState } from 'react'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import Filters from '../components/Filters'
import ImageDisplay from '../components/ImageDisplay'
import Modal from '../components/Modal'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { GetStaticProps } from 'next'
import { HomeProps, PhotoItems } from '../types/types'

export default function Home({ photos, tags }: HomeProps) {
  const router = useRouter()
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  let photoRouter = router.query.photo as string
  let captionRouter = router.query.caption as string

  return (
    <Layout>
      {photoRouter && (
        <Modal
          onClose={() => {
            router.push('/')
          }}
        >
          <ImageDisplay
            modal={true}
            photo={photoRouter}
            caption={captionRouter}
          />
        </Modal>
      )}
      <Filters
        photos={photos}
        tags={tags}
        setFilteredPhotos={setFilteredPhotos}
      />
      <AnimatePresence>
        <Gallery filteredPhotos={filteredPhotos} />
      </AnimatePresence>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await fetch(
    `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
    {
      headers: {
        Authorization: `${process.env.PRIVATE_HEADER}`,
      },
    }
  )
  const items = await results.json()

  const photos: PhotoItems = items.map((item: any) => {
    return {
      id: item.fileId,
      url: item.url,
      caption: item.customMetadata.Caption,
      tags: item.tags,
    }
  })
  const filters = async (items: any[]) => {
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

  const tags = await filters(items)
  return {
    props: { photos, tags },
  }
}
