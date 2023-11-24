'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import BackButton from '@components/BackButton'

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const [loaded, setLoaded] = useState(false)
  const containerAnimate = {
    full: {
      height: loaded ? '100%' : '150px',
      width: loaded ? '100%' : '150px',
      opacity: loaded ? 1 : 0 ,
      transition: {
        stagger: 0.5,
        ease: 'easeInOut',
        duration: 0.75,
      },
    },
  }
  return (
    <>
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
        <motion.div
          className={'h-full w-full'}
          animate="full"
          variants={containerAnimate}
        >
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
        </motion.div>
      </div>
      <motion.div
        className={loaded === true ? `relative max-h-[10%] w-auto` : `hidden`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 2 }}
      >
        <p
          className={
            modal == true ? `text-lg text-white` : `text-lg text-black`
          }
        >
          {photo.customMetadata.Caption}
        </p>
      </motion.div>
    </>
  )
}
