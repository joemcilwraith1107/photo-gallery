import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function photo({ photo }) {
    console.log(photo);
    const router = useRouter();
    if (!router.isFallback && !photo) {
        return <div>ERROR 404 NOT FOUND</div>
    }
    return (
        <div className="container mx-auto mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
                {router.isFallback ? (
                    <div>...Loading</div>
                ) : (
                    <>
                    <div className="relative aspect-square"></div>
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={photo}
                        />
                    </>
                )}
            </div>
            <div>
                <Link href="/">
                    <a>
                        <button>Home</button>
                    </a>
                </Link>
            </div>
        </div>
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