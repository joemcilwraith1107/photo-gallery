import { IKResponse, PhotoItems } from '../types/types'
import Gallery from './components/Gallery'
import getAllPhotoData from './lib/getAllPhotoData'
import getFilterData from './lib/getFilterData'

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <Gallery />
    </>
  )
}


