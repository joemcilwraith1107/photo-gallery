import cloudinary from './cloudinary'

type TagsResponse = {
  tags: string[]
}

export default async function getFilterData(): Promise<string[]> {
  const results: TagsResponse = await cloudinary.api
    .tags();

  results.tags.unshift("all");

  return results.tags
}
