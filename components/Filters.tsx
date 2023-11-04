import { Dispatch, SetStateAction, useState } from 'react'

type Params = {
  photos: PhotosData[]
  tags: string[]
  setFilteredPhotos: Dispatch<SetStateAction<PhotosData[]>>
}

export default function Filters({ photos, tags, setFilteredPhotos }: Params) {
  const [filterActive, setFilterActive] = useState(0)
  const btnClass =
    'flex-auto flex-nowrap p-1 text-xs sm:text-sm lg:text-base text-center font-normal hover:text-gray-900'

  async function filteredList(tag: string, index: number) {
    const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
    setFilterActive(index);
    index === 0 ? setFilteredPhotos(photos) : setFilteredPhotos(filteredPhotos);
  }

  const menu = tags.map((tag, index) => (
    <button
      key={index}
      className={
        filterActive === index
          ? `${btnClass} text-black underline`
          : `${btnClass} text-gray-500`
      }
      value={`${tag}`}
      onClick={async () => {
        await filteredList(tag, index)
      }}
    >
      <p>{`${tag}`}</p>
    </button>
  ))

  return (
    <header className="container mx-auto flex flex-row items-center justify-between space-x-4 bg-white px-6 py-6">
      <nav className="content center p flex w-full flex-row flex-wrap justify-center">
        {menu}
      </nav>
    </header>
  )
}
