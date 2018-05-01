import {Pipe, PipeTransform} from '@angular/core';
import {Tag} from '../backend/model';

@Pipe({
  name: 'filter'
})
export class TagsFilterPipe implements PipeTransform {


  constructor() {
  }

  transform(tags: Tag[], filter: string) {
    return tags.filter(tag => tag.type.libelle === filter);
  }
}
