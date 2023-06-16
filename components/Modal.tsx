import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const onClose = useCallback(() => {
    router.back();
  }, [router]);

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