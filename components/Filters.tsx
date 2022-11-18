import { useState } from 'react'

type Filter = string;

export default function Filters({ items, tags, setFilteredPhotos }) {
  const [filterActive, setFilterActive] = useState(0);
  const btnClass = "flex-auto flex-nowrap p-1 text-xs sm:text-sm lg:text-base text-center font-normal hover:text-gray-900";

  const filteredList = async (filter: Filter, index: number) => {
    const filteredPhotos = items.filter(item => item.tags.includes(filter));
    setFilterActive(index);
    if (index === 0) {
        setFilteredPhotos(items);
    } else {
        setFilteredPhotos(filteredPhotos); 
    }
  }

  const menu = tags.map((filter: Filter, index: number) => (
    <button
      key={index}
      className={filterActive === index ? `${btnClass} text-black underline` : `${btnClass} text-gray-500`}
      value={filter}
      onClick={async () => {
        await filteredList(filter, index)
      }}
    >
      <p>{filter}</p>
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
