import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPipe'
})
export class TransformPipePipe implements PipeTransform {

  transform(value: string): string {
    let stringArr = value.split(' ')
    stringArr = stringArr.map(word => word[0].toUpperCase() + word.substring(1))
    return stringArr.reduce((acc, string) => acc = acc + string + ' ', ' ')
  }

}
