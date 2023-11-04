'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { shimmer, toBase64 } from '@lib/getShimmer'

export default function ImageDisplay({ modal, photo }: ImageDisplay) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <motion.div
        className={`relative flex max-h-90 max-w-90 flex-col bg-white p-4`}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        <div
          className={
            loaded ? `absolute inset-0 mx-auto flex flex-col` : `hidden`
          }
        >
          <div className="right-0 top-0 flex items-center p-4">
            <div className="rounded-full bg-black/60 text-white/75 hover:bg-black hover:text-white sm:p-2 md:p-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </div>
          </div>
        </div>

        <Image
          priority={true}
          className="h-full w-full min-w-56 min-h-56"
          height={photo.height}
          width={photo.width}
          sizes="100vw"
          src={photo.url}
          alt={photo.customMetadata.Caption}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(photo.width, photo.height),
          )}`}
          onLoad={() => {
            setLoaded(true)
          }}
        />
      </motion.div>
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
