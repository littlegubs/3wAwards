import {Component, OnInit} from '@angular/core';
import {GlobalsService} from '../../globals.service';
import {HttpClient} from '@angular/common/http';
import {RequestJudgesService} from '../../../backend/services';
import {RequestJudge} from '../../../backend/model';

@Component({
  selector: 'app-table-jury',
  templateUrl: './table-judge.component.html',
  styleUrls: ['./table-judge.component.scss']
})
export class TableJudgeComponent implements OnInit {
  requestsJudges: RequestJudge[];

  constructor(private http: HttpClient, private globalsService: GlobalsService, private requestJudgesService: RequestJudgesService) {
  }

  ngOnInit() {
    this.requestJudgesService.getAll().subscribe(
      res => {
        this.requestsJudges = res;
      },
      err => {
      }
    );
  }

  acceptRequest(requestJudge: RequestJudge): void {
    const body = new FormData();
    body.append('id', requestJudge.member.id.toString());
    this.http.post(this.globalsService.updateJudge, body).subscribe(
      res => {
        this.removeRequest(requestJudge);
      },
      err => {
      }
    );
  }

  removeRequest(requestJudge: RequestJudge): void {
    this.requestJudgesService.remove(requestJudge).subscribe(
      res => {
        for (let i = 0; i < this.requestsJudges.length; i++) {
          if (this.requestsJudges[i].id === requestJudge.id) {
            this.requestsJudges.splice(i, 1);
          }
        }
      },
      err => {
      });
  }

}
