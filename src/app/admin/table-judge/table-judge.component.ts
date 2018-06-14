import {Component, OnInit} from '@angular/core';
import {GlobalsService} from '../../globals.service';
import {HttpClient} from '@angular/common/http';
import {RequestJudgesService} from '../../../backend/services';
import {RequestJudge} from '../../../backend/model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-table-jury',
  templateUrl: './table-judge.component.html',
  styleUrls: ['./table-judge.component.scss']
})
export class TableJudgeComponent implements OnInit {
  requestsJudges: RequestJudge[];
  pageNumber = 1;

  constructor(private http: HttpClient, private globalsService: GlobalsService, private requestJudgesService: RequestJudgesService, public snackBar: MatSnackBar) {
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
        this.openSnackBar();
      },
      err => {
      }
    );
  }

  removeRequest(requestJudge: RequestJudge): void {
    this.requestJudgesService.remove(requestJudge).subscribe(
      res => {
          this.openSnackBarRemove();
        for (let i = 0; i < this.requestsJudges.length; i++) {
          if (this.requestsJudges[i].id === requestJudge.id) {
            this.requestsJudges.splice(i, 1);
          }
        }
      },
      err => {
      });
  }

  pagination(value: number): void {
      this.requestsJudges = undefined;
      this.pageNumber = this.pageNumber + value;
      this.requestJudgesService.getAll(this.pageNumber).subscribe(
          res => {
              this.requestsJudges = res;
          },
          err => {
          }
      );
  }

    openSnackBar(): void {
        this.snackBar.open('Requête acceptée', 'Ok', {
            duration: 2000
        });
    }

    openSnackBarRemove(): void {
        this.snackBar.open('Requête supprimée', 'Ok', {
            duration: 2000
        });
    }
}
