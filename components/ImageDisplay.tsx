'use client'

import Image from 'next/image'
import { useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BackButton from '@components/BackButton'

function imageAnimation(
  loaded: boolean,
) {
  const [scope, animate] = useAnimate()
  useEffect(() => {
    const image = document.querySelector('#image') ?? "";
    const caption = document.querySelector('#caption') ?? "";
    animate(
      scope.current,
      loaded
        ? { height: '100%', width: '100%' }
        : { height: '200px', width: '200px' },
      { ease: 'easeInOut', duration: 1 },
    )
    animate(image, { opacity: loaded ? 1 : 0 }, { duration: 0.5 })
    animate(caption, { opacity: loaded ? 1 : 0 }, { duration: 0.5 })
  }, [loaded])

  return scope
}

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const [loaded, setLoaded] = useState(false)
  const scope = imageAnimation(loaded)
  return (
    <div
      id="container"
      ref={scope}
      className={`flex flex-col items-center justify-center`}
    >
      <div
        className={`relative flex flex-col max-h-90 max-w-90 min-w-[150px] min-h-[150px] bg-white p-4`}
      >
        <div
          className={
            loaded ? `absolute inset-0 mx-auto flex flex-col` : `hidden`
          }
        >
          {modal ? (
            <BackButton />
          ) : (
            <Link href="/">
              <BackButton />
            </Link>
          )}
        </div>
        <div id="image" className={'h-full w-full'} ref={scope}>
          <Image
            priority={true}
            className="h-full w-full"
            height={photo.height}
            width={photo.width}
            sizes="100vw"
            src={photo.url}
            alt={photo.customMetadata.Caption}
            onLoad={() => {
              setLoaded(true)
            }}
          />
        </div>
      </div>
      <div id="caption" className={`relative max-h-[10%] w-auto`}>
        <p
          className={
            modal == true ? `text-lg text-white` : `text-lg text-black`
          }
        >
          {photo.customMetadata.Caption}
        </p>
      </div>
    </div>
  )
}
