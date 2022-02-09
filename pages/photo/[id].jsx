import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function photo({ photo }) {
    const router = useRouter();
    if (!router.isFallback && !photo) {
        return <div>ERROR 404 NOT FOUND</div>
    }

    const ScrollButton = ({ direction }) => {
        const character = direction === 'back' ? faChevronLeft : faChevronRight;
        return (
            <button className="text-white place-self-center z-50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" onClick={(e) => e.stopPropagation(scrollImage(direction, imageToShow))}>
                <FontAwesomeIcon icon={character} color="white" />
            </button>
        )
    }
    return (
        <Layout>
            <div className="grid-cols-10 grid-rows-10 grid-flow-col">
                <div className="col-span-1"></div>
                <div className="col-span-8">
                    <div className="relative w-full h-full self-center">
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
                <div className="col-span-1"></div>
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
    return {
        props: { photo }
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