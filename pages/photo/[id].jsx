import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ImageDisplay from "../../components/ImageDisplay";

export default function photo({ photo, caption }) {
    const router = useRouter();
    if (!router.isFallback && !photo) {
        return <div>ERROR 404 NOT FOUND</div>
    }

    return (
        <Layout>
            {router.isFallback ? (
                <div>...Loading</div>
            ) : (
                <>
                    <ImageDisplay
                        modal={false}
                        photo={photo}
                        caption={caption}
                    />
                </>
            )}
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