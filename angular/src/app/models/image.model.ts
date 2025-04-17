// src/app/image.model.ts

export interface ImageAsset {
  _ref?: string;
  _type: string;
  url?: string; // populated after resolving with GROQ
}

export interface SanityImage {
  _type: 'image';
  asset: ImageAsset;
}
