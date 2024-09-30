'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

type GalleryProps = {
  images: ImagesData[]
}

export default function ImageGrid({images}: GalleryProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const imageId = searchParams?.get('imageId')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const selectedImage = images.find(img => img.fileId === imageId)

  const openModal = useCallback((id: string) => {
    setIsModalOpen(true)
    router.push(`/?imageId=${id}`, { scroll: false })
  }, [router])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    router.push('/', { scroll: false })
  }, [router])

  useEffect(() => {
    setIsModalOpen(!!imageId)
  }, [imageId])

  const calculateImageDimensions = (image: ImagesData) => {
    const maxWidth = window.innerWidth * 0.9
    const maxHeight = window.innerHeight * 0.9
    const aspectRatio = image.width / image.height
  
    let width = image.width
    let height = image.height
  
    if (width > maxWidth) {
      width = maxWidth
      height = width / aspectRatio
    }
  
    if (height > maxHeight) {
      height = maxHeight
      width = height * aspectRatio
    }
  
    return { width, height }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Button
            key={image.fileId}
            className="relative aspect-square w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => openModal(image.fileId)}
          >
            <Image
              src={image.url}
              alt={image.customMetadata.Caption}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </Button>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={closeModal}>

        <DialogContent className="max-w-[90vw] max-h-[90vh] h-auto w-auto p-0 overflow-hidden" hidden>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="relative"
                style={calculateImageDimensions(selectedImage)}
              >
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.customMetadata.Caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 60vw"
                  priority
                />
              </div>
              <Button
                onClick={closeModal}
                variant="close"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}