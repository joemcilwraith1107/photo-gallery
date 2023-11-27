'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import BackButton from '@components/BackButton'

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const [loading, setLoading] = useState(modal)
  const [pulsing, setPulsing] = useState(modal)
  const imageLoaded = () => {
    setLoading(false)
    setPulsing(false)
  }

  return (
    <motion.div
      className={`flex flex-col items-center justify-center`}
      initial={{ height: '200px', width: '200px' }}
      animate={{
        height: loading ? '200px' : '100vh',
        width: loading ? '200px' : '100vw',
      }}
      transition={{
        height: { delay: 0, duration: 1 },
        width: { delay: 0, duration: 1 },
      }}
    >
      <div
        className={
          pulsing
            ? `relative max-h-90 max-w-90 min-w-[150px] min-h-[150px] p-4 animate-pulse bg-gray-300`
            : `relative max-h-90 max-w-90 min-w-[150px] min-h-[150px] bg-white p-4`
        }
      >
        <motion.div
          className={`absolute inset-0 mx-auto flex flex-col z-50`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: loading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 1, duration: 0.5 } }}
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
      <motion.div
        className={`relative max-h-[10%] w-auto`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{ opacity: { delay: 1, duration: 0.5 } }}
      >
        <p
          className={
            modal == true ? `text-lg text-white` : `text-lg text-black`
          }
        >
          {photo.customMetadata.Caption}
        </p>
      </motion.div>
    </motion.div>
  )
}
