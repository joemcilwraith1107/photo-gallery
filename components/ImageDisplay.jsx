import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ImageDisplay({ modal, photo, caption }) {
    const bgClass = "flex flex-col h-full w-full";
    const fontClass = "font-sans text-2xl";
    return (
        <div className={modal == true ? `${bgClass} bg-black bg-opacity-80` : `${bgClass} bg-white`}>
            <div className="flex flex-row flex-none basis-1/12">
                <div className="basis-1/12"></div>
                <div className="basis-11/12 self-center">
                    {modal ? (<div></div>) : (
                        <Link href="/">
                            <a>
                                <p className={modal == true ? `${fontClass} text-white` : `${fontClass} text-black`}>
                                    &#x21E6; Back to Gallery
                                </p>
                            </a>
                        </Link>
                    )}
                </div>
                <div className="basis-1/12 self-center z-50">
                    {modal ? (
                        <Link href="/">
                            <a>
                                <FontAwesomeIcon icon={faTimes} className="self-center cursor-pointer" size="3x" color="white" />
                            </a>
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <div className="flex flex-row justify-center basis-11/12">
                <div className="flex flex-none basis-1/12 justify-center"></div>
                <div className="basis-11/12">
                    <div className="relative h-full w-auto z-50">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            priority="true"
                            src={photo}
                        />
                    </div>
                </div>
                <div className="flex flex-none basis-1/12 justify-center"></div>
            </div>
            <div className="flex flex-row justify-center basis-1/12">
                <div className="flex flex-none basis-1/12 justify-center"></div>
                <div className="flex basis-11/12 justify-center self-center">
                    <p className={modal == true ? `${fontClass} text-white` : `${fontClass} text-black`}>
                        {caption}
                    </p>
                </div>
                <div className="flex flex-none basis-1/12 justify-center"></div>
            </div>
        </div>
    )
}