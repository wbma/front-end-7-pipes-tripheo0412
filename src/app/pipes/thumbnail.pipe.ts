import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: string, size?: string): string {
    if (size == null) {
      size = 'medium';
    }

    const filename = value.split('.')[0];

    switch (size) {
      case 'screenshot': {
        return `${filename}.png`;
      }

      case 'small': {
        return `${filename}-tn160.png`;
      }

      case 'medium': {
        return `${filename}-tn320.png`;
      }

      case 'large': {
        return `${filename}-tn640.png`;
      }

      default: {
        // Return medium size as default value
        return `${filename}-tn320.png`;
      }
    }
  }

}
