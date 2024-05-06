'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Modal({ children }: ModalProps) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const panel = useRef(null)
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const onDismiss = useCallback(() => {
    setIsOpen(false)
    router.back()
  }, [setIsOpen, router])

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        onDismiss()
      }}
    >
      <div
        ref={overlay}
        className="fixed bottom-0 left-0 right-0 top-0 bg-black/60"
      />
      <div
        ref={wrapper}
        className="fixed inset-0 flex items-center justify-center p-4"
      >
        <Dialog.Panel
          ref={panel}
          onClick={() => {
            onDismiss()
          }}
          className="flex h-full w-full flex-col items-center justify-center"
        >
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
