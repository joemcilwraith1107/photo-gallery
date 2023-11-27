'use client'

import Image from 'next/image'
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BackButton from '@components/BackButton'

function imageAnimation(loaded: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const image = document.querySelector('#image') ?? ''
    const caption = document.querySelector('#caption') ?? ''
    const sequence = loaded
      ? [
          scope.current,
          { height: '100%', width: '100%' },
          { ease: 'easeInOut', duration: 1 },
          image,
          { opacity: 1 },
          { duration: 0.5 },
          caption,
          { opacity: 1 },
          { duration: 0.5 },
        ]
      : [
          scope.current,
          { height: '200px', width: '200px' },
          image,
          { opacity: 0 },
          { duration: 0.5 },
          caption,
          { opacity: 0 },
          { duration: 0.5 },
        ]
    animate(sequence)
  }, [loaded])

  return scope
}

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const [loading, setLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)
  const imageLoaded = () => {
    setLoading(false)
    setPulsing(false)
  }

  return (
    <motion.div
      id="container"
      className={`flex flex-col items-center justify-center`}
      initial={{ height: '200px', width: '200px' }}
      animate={{
        height: loading ? '200px' : '100%',
        width: loading ? '200px' : '100%',
      }}
      transition={{
        height: { delay: 0, duration: 1 },
        width: { delay: 0, duration: 1 },
      }}
    >
      <div
        className={
          pulsing
            ? `relative flex flex-col max-h-90 max-w-90 min-w-[150px] min-h-[150px] p-4 animate-pulse bg-gray-200 border-4 border-white`
            : `relative flex flex-col max-h-90 max-w-90 min-w-[150px] min-h-[150px] bg-white p-4`
        }
      >
        <motion.div
          className={loading ? `hidden` : `absolute inset-0 mx-auto flex flex-col z-50`}
        >
          {modal ? (
            <BackButton />
          ) : (
            <Link href="/">
              <BackButton />
            </Link>
          )}
        </motion.div>
        <motion.div
          id="image"
          className={`h-full w-full`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: loading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 1, duration: 0.5 } }}
        >
          <Image
            priority={true}
            className="h-full w-full"
            height={photo.height}
            width={photo.width}
            sizes="100vw"
            src={photo.url}
            alt={photo.customMetadata.Caption}
            onLoad={imageLoaded}
          />
        </motion.div>
      </div>
      <div
        id="caption"
        className={loading ? `hidden` : `relative max-h-[10%] w-auto`}
      >
        <p
          className={
            modal == true ? `text-lg text-white` : `text-lg text-black`
          }
        >
          {photo.customMetadata.Caption}
        </p>
      </div>
    </motion.div>
  )
}
