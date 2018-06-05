import {Component} from '@angular/core';
import {Project} from '../../../backend/model/Project';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent {

  searchInput: string;
  projects: Project[];
  routeSub: any;
  positionTooltip = 'right';
  isEmpty: boolean;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.projects = undefined;
      this.searchInput = params['searchValue'];
      this.projectsService.getAllProjectByName(this.searchInput).subscribe(
        res => {
          this.projects = res;
          if (this.projects.length === 0) {
            this.isEmpty = true;
          } else {
            this.isEmpty = false;
          }
        },
        err => {
        }
      );
    });
  }
}
