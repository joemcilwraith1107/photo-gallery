import Image from "next/image";
import Link from "next/link";

export default function ImageDisplay({ photo, caption }) {

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-row flex-none basis-1/12">
                <div className="basis-1/12"></div>
                <div className="basis-11/12 self-center">
                    <Link href="/">
                        <a>
                            <p className="font-sans text-3xl">
                                &#x21E6; Back to Gallery
                            </p>
                        </a>
                    </Link>
                </div>
                <div className="basis-1/12"></div>
            </div>
            <div className="flex flex-row justify-center basis-11/12">
                <div className="flex flex-none basis-1/12 justify-center"></div>
                <div className="basis-11/12">
                    <div className="relative h-full w-auto">

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
                    <p className="font-sans text-lg">
                        {caption}
                    </p>
                </div>
                <div className="flex flex-none basis-1/12 justify-center"></div>
            </div>
        </div>
    )
}