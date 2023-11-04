import getAllPhotoData from '@lib/getAllPhotoData'
import Gallery from '@components/Gallery'
import getFilterData from '@lib/getFilterData'
import ScrollToTop from '@components/ScrollToTop'
import Footer from '@components/Footer'

export default async function Page() {
  const photoData = getAllPhotoData()
  const tagsData = getFilterData()

  const [photos, tags] = await Promise.all([photoData, tagsData])

  return (
    <div className="flex h-screen flex-col justify-between">
      <main className="shrink basis-11/12">
        <Gallery photos={photos} tags={tags} />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
