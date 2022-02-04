import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import Footer from '../components/Footer';

export default function Home({ items }) {
  const [filter, setFilter] = useState("");
  const [photos, setPhotos] = useState(items);
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Photo Gallery</title>
      </Head>

      <div className="container mx-auto mb-auto">
        <div className="container mx-auto flex flex-wrap overflow-hidden justify-center align-middle pb-4">
          {photos && photos.map((preview) => (
            <ImagePreview
              key={preview.fileId}
              thumbnailUrl={preview.url}
              fileId={preview.fileId}
            />
          ))}
        </div>
      </div>


      <Footer />


    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await fetch(`${process.env.IK_API}?path=Portfolio`, {
    headers: {
      Authorization: `${process.env.PRIVATE_HEADER}`
    }
  });
  const items = await results.json();
  return {
    props: { items },
  }
}
