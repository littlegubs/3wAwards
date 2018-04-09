import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from './globals.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'liip'
})
export class LiipPipe implements PipeTransform {

  constructor(private http: HttpClient, private globals: GlobalsService, private sanitizer: DomSanitizer) {
  }

  transform(path: string, filter?: string): SafeResourceUrl {

    let newPath: SafeResourceUrl;
    this.http.get(this.globals.url + 'liip?path=' + path + '&filter=' + filter).subscribe(res => {
      // newPath = this.sanitizer.bypassSecurityTrustResourceUrl(res);
    });
    return newPath;
  }

}
