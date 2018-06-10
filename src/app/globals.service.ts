import {Injectable} from '@angular/core';

@Injectable()
export class GlobalsService {

  url = 'http://127.0.0.1:8000/';
  acceptedProjectUrl = this.url + 'projects?status=accepted';

}
