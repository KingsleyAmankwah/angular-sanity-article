export const getAllPostsQuery = `
*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage {
    asset->{
      url
    }
  },
  author->{
    name,
    image{
    asset->{
       url
      }
    }
  },
    categories[]->{
      title,
      description
    },
  publishedAt,
  body[0]
} | order(publishedAt desc)
`;

export const getPostBySlugQuery = (slug: string) => `
*[_type == "post" && slug.current == "${slug}"][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{
      url
    }
  },
  author->{
    name,
    bio,
    image {
      asset->{
        url
      }
    }
  },
  categories[]->{
    title
  },
  body
}
`;
