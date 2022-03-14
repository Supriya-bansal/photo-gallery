import { Pipe, PipeTransform } from '@angular/core';
import { SharedUtil } from '../utils/SharedUtils';

@Pipe({
  name: 'italicize',
})
export class ItalicizePipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    let result = '';
    if (SharedUtil.isNotNullOrEmpty(searchText)) {
      const words = value.split(' ');
      for (const [index, word] of words.entries()) {
        if (word.lastIndexOf(searchText) === -1) {
          result += (index > 0 ? ' ' : '') + word;
        } else {
          result += (index > 0 ? ' ' : '') + word.italics();
        }
      }
      return result;
    }
    return value;
  }
}
