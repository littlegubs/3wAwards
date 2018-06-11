import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  url = 'http://127.0.0.1:8000/';
  acceptedProjectUrl = this.url + 'projects?status=accepted';
  updateStatus = this.url + 'admin/update-project-status';
  updateParam = this.url + 'admin/update-param';
  updateJudge = this.url + 'admin/update-jury';

}
