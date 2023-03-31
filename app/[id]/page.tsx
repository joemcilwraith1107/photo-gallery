import { useRouter } from 'next/router';
import ImageDisplay from '../../components/ImageDisplay';
import { IKResponse, PhotoItems, PhotoProps } from '../../types/types'
import Layout from '../layout';

export default async function Page({ params }: { params: { id: string } }) {
  const photo: PhotoProps = await getPhoto(params.id);
  const router = useRouter()
  if (!router.isFallback && !photo) {
    return <div>ERROR 404 NOT FOUND</div>
  }

  return (
    <Layout>
      {router.isFallback ? (
        <div>...Loading</div>
      ) : (
        <>
          <ImageDisplay modal={false} photo={photo.url} caption={photo.caption} />
        </>
      )}
    </Layout>
  )
}

const getPhoto = async (id: string) => {
  const results: IKResponse = await fetch(`${process.env.IK_API}/${id}/details`, {
    headers: {
      Authorization: `${process.env.PRIVATE_HEADER}`,
    },
  }).then((res) => res.json())
  
  return {
    url: results.url,
    caption: results.customMetadata.Caption
  }
}

export const generateStaticParams = async () => {
  const results = await fetch(
    `${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`,
    {
      headers: {
        Authorization: `${process.env.PRIVATE_HEADER}`,
      },
    }
  ).then((res) => res.json());
  return results.map((result: IKResponse) => ({
    id: result.fileId,
  }))
}
