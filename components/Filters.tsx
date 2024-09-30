import { Button } from '@/components/ui/button'
import { type Dispatch, type SetStateAction, useState } from 'react'

type Params = {
  photos: ImagesData[]
  tags: string[]
  setFilteredPhotos: Dispatch<SetStateAction<ImagesData[]>>
}

export default function Filters({ photos, tags, setFilteredPhotos }: Params) {
  const [filterActive, setFilterActive] = useState(0)
  const btnClass =
    'flex-auto flex-nowrap p-1 text-xs sm:text-sm lg:text-base text-center font-normal hover:text-gray-900'

  async function filteredList(tag: string, index: number) {
    const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag))
    setFilterActive(index)
    index === 0 ? setFilteredPhotos(photos) : setFilteredPhotos(filteredPhotos)
  }

  const menu = tags.map((tag, index) => (
    <Button
      key={tag}
      variant="link"
      value={`${tag}`}
      onClick={async () => {
        await filteredList(tag, index)
      }}
    >
      <p>{`${tag}`}</p>
    </Button>
  ))

  return (
    <header className="container mx-auto flex flex-row items-center justify-between space-x-4 bg-white px-6 py-6">
      <nav className="content center p flex w-full flex-row flex-wrap justify-center">
        {menu}
      </nav>
    </header>
  )
}
