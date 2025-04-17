// src/app/block-content.model.ts

export interface BlockContent {
  _key: string;
  style?: string;
  markDefs?: { _key: string; _type: string }[];
  children: {
    _key: string;
    marks?: string[];
    text: string;
  }[];
}
