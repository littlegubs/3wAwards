import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../../backend/services';
import {Project} from '../../../backend/model';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-table-projects',
  templateUrl: './table-projects.component.html',
  styleUrls: ['./table-projects.component.scss']
})
export class TableProjectsComponent implements OnInit {
  projects: Project[];
  pageNumber = 1;

  constructor(private projectsService: ProjectsService, private http: HttpClient, private globalsService: GlobalsService) {
  }

  ngOnInit() {
    this.projectsService.getAll(this.pageNumber).subscribe(
      res => {
        this.projects = res;
      },
      err => {
      }
    );
  }

  pagination(value: number): void {
    this.pageNumber = this.pageNumber + value;
    console.log(this.pageNumber);
    this.projectsService.getAll(this.pageNumber).subscribe(
      res => {
        this.projects = res;
      },
      err => {
      }
    );
  }

  updateStatus(projectId: number, status: string) {
    const body = new FormData();
    body.append('id', projectId.toString());
    body.append('status', status);
    this.http.post(this.globalsService.updateStatus, body).subscribe(
      res => {
        console.log(res);
      },
      err => {
      }
    );
  }
}
