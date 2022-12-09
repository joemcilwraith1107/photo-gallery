'use client'

import { useState } from 'react'
import { FilterProps } from '../../types/types'

export default function Filters({
  photos,
  tags,
  setFilteredPhotos,
}: FilterProps) {
  const [filterActive, setFilterActive] = useState(0)
  const btnClass =
    'flex-auto flex-nowrap p-1 text-xs sm:text-sm lg:text-base text-center font-normal hover:text-gray-900'

  const filteredList = async (filter: string, index: number) => {
    const filteredPhotos = photos.filter((item) =>
      item.tags.includes(`${filter}`)
    )
    setFilterActive(index)
    if (index === 0) {
      setFilteredPhotos(photos)
    } else {
      setFilteredPhotos(filteredPhotos)
    }
  }

  const menu = tags.map((filter, index) => (
    <button
      key={index}
      className={
        filterActive === index
          ? `${btnClass} text-black underline`
          : `${btnClass} text-gray-500`
      }
      value={`${filter}`}
      onClick={async () => {
        await filteredList(filter, index)
      }}
    >
      <p>{`${filter}`}</p>
    </button>
  ))

  return (
    <header className="container mx-auto flex flex-row items-center justify-between space-x-4 bg-white py-6 px-6">
      <nav className="content center p flex w-full flex-row flex-wrap justify-center">
        {menu}
      </nav>
    </header>
  )
}
