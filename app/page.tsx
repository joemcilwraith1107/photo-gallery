import { IKResponse, PhotoItems } from '../types'
import Gallery from './components/Gallery'
import getAllPhotoData from './lib/getAllPhotoData'

export default async function Page() {
  const photoData: Promise<IKResponse> = getAllPhotoData()
  return (
    <div>

    </div>

  )
}


