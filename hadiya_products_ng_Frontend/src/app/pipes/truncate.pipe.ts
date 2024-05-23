import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, size: number): string {
    if(!value){
      return "";
    }
    const limit = size > 0 ? size : 30;
    return value.length > limit ? value.substring(0, limit) + "..." : value
  }

}
