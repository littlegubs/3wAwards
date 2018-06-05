import {Component, OnInit} from '@angular/core';
import {Project} from '../../../backend/model/Project';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {

  searchInput: string;
  projects: Project[];
  routeSub: any;
  positionTooltip = 'right';

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.searchInput = params['searchValue'];
    });
  }

  ngOnInit() {
    this.projectsService.getAllProjectByName(this.searchInput).subscribe(
      res => {
        this.projects = res;
      },
      err => {
      }
    );
  }

}
