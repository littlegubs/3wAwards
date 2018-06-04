import {Component, OnInit} from '@angular/core';
import {Project} from '../../../backend/model/Project';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {

  searchInput: string;
  projects: Project[];
  resProjects = [];
  routeSub: any;
  positionTooltip = 'right';

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, private http: HttpClient,
              private globalsService: GlobalsService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.searchInput = params['searchValue'];
    });
  }

  ngOnInit() {
    this.http.get(this.globalsService.acceptedProjectUrl + '&projectName=' + this.searchInput).subscribe(
      res => {
        console.log(res);
      },
      err => {
      }
    );
  }

}
