import { Dialog } from "@headlessui/react";

export default function Modal({ onClose = () => { }, children }) {

    return (
        <Dialog
            static
            open={true}
            onClose={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <Dialog.Overlay
                className="fixed inset-0 bg-white bg-opacity-0 z-50"
            />
            {children}
        </Dialog>
    );
}