// src/app/sanity/types/post.model.ts

import { Category } from './category.model';
import { BlockContent } from './block-content.model';
import { SanityImage } from './image.model';
import { Author } from './author.model';

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  mainImage?: SanityImage;
  categories?: Category[];
  publishedAt: string;
  body?: BlockContent[];
}
