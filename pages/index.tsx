import { useState } from 'react'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import Filters from '../components/Filters'
import ImageDisplay from '../components/ImageDisplay'
import Modal from '../components/Modal'
import { useRouter } from 'next/router'
import { createContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { GetStaticProps } from 'next'

export const PhotoContext = createContext()

export default function Home({ items, tags }) {
  const router = useRouter()
  const [photos, setPhotos] = useState(items)
  const [filteredPhotos, setFilteredPhotos] = useState(items)
  const value = { photos, filteredPhotos, setFilteredPhotos }

  return (
    <Layout>
      <PhotoContext.Provider value={value}>
        {router.query.photo && (
          <Modal
            onClose={() => {
              router.push('/')
            }}
          >
            <ImageDisplay
              modal={true}
              photo={router.query.photo}
              caption={router.query.caption}
            />
          </Modal>
        )}
        <Filters items={items} tags={tags} setPhotos={setPhotos} />
        <AnimatePresence>
          <Gallery />
        </AnimatePresence>
      </PhotoContext.Provider>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const results: Response = await fetch(
    `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
    {
      headers: {
        Authorization: `${process.env.PRIVATE_HEADER}`,
      },
    }
  )
  const items = await results.json()
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
    props: { items, tags },
  }
}
