import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTitle'
})
export class CutTitlePipe implements PipeTransform {

  transform(term:string):string {
    return term.split('-').join(" ");
  }

}
