import {Pipe, PipeTransform} from '@angular/core';
import {Tag} from '../backend/model';

@Pipe({
  name: 'filter'
})
export class TagsFilterPipe implements PipeTransform {


  constructor() {
  }

  transform(tags: Tag[], filter: string) {
      if (tags.filter(tag => tag.type.libelle === filter).length === 0) {
          return null;
      } else {
          return tags.filter(tag => tag.type.libelle === filter);
      }
  }
}
