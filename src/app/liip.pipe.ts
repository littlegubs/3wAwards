import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from './globals.service';

@Pipe({
  name: 'liip'
})
export class LiipPipe implements PipeTransform {


  constructor(private http: HttpClient, private globals: GlobalsService) {
  }

  transform(path: string, filter?: string) {
    const url = this.globals.url + 'media/cache/resolve/' + filter + '/' + path;
    return url;
  }
}
