// src/app/author.model.ts

import { BlockContent } from './block-content.model';
import { SanityImage } from './image.model';

export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: SanityImage;
  bio?: BlockContent[];
}
