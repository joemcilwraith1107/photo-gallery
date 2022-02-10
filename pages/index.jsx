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
        items={items}
        tags={tags}
        setPhotos={setPhotos}
      />

      <div className="container mx-auto mb-4">
        <div className="flex flex-row flex-wrap justify-center">
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

export async function getStaticProps() {
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
