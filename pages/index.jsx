import Head from 'next/head';
import { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import Layout from '../components/Layout';
import Filters from '../components/Filters';

export default function Home({ items, tags }) {
  const [filter, setFilter] = useState("");
  const [photos, setPhotos] = useState(items);
  return (
    <Layout>
      <Filters
        tags={tags}
        setPhotos={setPhotos}
      />

      <div className="container mx-auto mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
          {photos && photos.map((preview) => (
            <ImagePreview
              key={preview.fileId}
              thumbnailUrl={preview.url}
              fileId={preview.fileId}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps () {
  const results = await fetch(`${process.env.IK_API}?path=Portfolio&sort=DESC_NAME`, {
    headers: {
      Authorization: `${process.env.PRIVATE_HEADER}`
    }
  });
  const items = await results.json();
  const filters = async (items) => {
    let array = ["all"];
    items.forEach((item) => {
        let tags = item.tags;
        if (tags == null) {
            console.log('Untagged picture');
        }
        for (let tag of tags) {
            array.push(tag);
        }
    });
    return [...new Set(array)];
  };
  const tags = await filters(items);
  return {
    props: { items, tags },
  }
}
