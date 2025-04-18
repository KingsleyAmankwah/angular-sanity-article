import { Pipe, PipeTransform } from '@angular/core';
import { BlockContent } from '../models/block-content.model';

@Pipe({
  name: 'blockContentToText',
})
export class BlockContentToTextPipe implements PipeTransform {
  transform(
    blockContent: BlockContent | BlockContent[] | undefined,
    maxLength: number = 0
  ): string {
    if (!blockContent) return '';

    const blocks = Array.isArray(blockContent) ? blockContent : [blockContent];
    const text = blocks
      .map((block) => block.children.map((child) => child.text).join(' '))
      .join(' ');

    return maxLength > 0 && text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  }
}
