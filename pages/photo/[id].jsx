import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function photo({ photo, caption }) {
    const router = useRouter();
    if (!router.isFallback && !photo) {
        return <div>ERROR 404 NOT FOUND</div>
    }

    const ScrollButton = ({ direction }) => {
        const character = direction === 'back' ? faChevronLeft : faChevronRight;
        return (
            <button className="text-black z-50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={(e) => e.stopPropagation(scrollImage(direction, imageToShow))}>
                <FontAwesomeIcon icon={character} color="black" />
            </button>
        )
    }
    return (
        <Layout>
            <div className="flex flex-col h-full">
                <div className="basis-1/12"></div>
                <div className="flex flex-row justify-center basis-11/12">
                    <div className="flex flex-none basis-1/12 justify-center">
                        <ScrollButton
                            direction={'back'}
                        />
                    </div>
                    <div className="basis-11/12">
                        <div className="relative h-full w-auto">
                            {router.isFallback ? (
                                <div>...Loading</div>
                            ) : (
                                <>
                                    <Image
                                        layout="fill"
                                        objectFit="contain"
                                        priority="true"
                                        src={photo}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-none basis-1/12 justify-center">
                        <ScrollButton
                            direction={'forward'}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center basis-1/12">
                    <div className="flex flex-none basis-1/12 justify-center"></div>
                    <div className="flex basis-11/12 justify-center self-center">
                        <p className="text-lg">
                            {caption}
                        </p>
                    </div>
                    <div className="flex flex-none basis-1/12 justify-center"></div>
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const photo_id = params.id
    const results = await fetch(`${process.env.IK_API}/${photo_id}/details`, {
        headers: {
            Authorization: `${process.env.PRIVATE_HEADER}`
        }
    });
    const photos = await results.json();
    const photo = photos.url;
    const caption = photos.customMetadata.Caption;
    return {
        props: { photo, caption }
    }
}

export async function getStaticPaths() {
    const results = await fetch(`${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`, {
        headers: {
            Authorization: `${process.env.PRIVATE_HEADER}`
        }
    });
    const items = await results.json();
    return {
        paths:
            items?.map((photo) => ({
                params: {
                    id: photo.fileId,
                }
            })) || [],
        fallback: true,
    }
}