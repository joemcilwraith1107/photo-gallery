import { Dialog } from '@headlessui/react'

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay className="fixed inset-0 z-10 bg-white bg-opacity-0" />
      {children}
    </Dialog>
  )
}