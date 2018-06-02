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
  resProjects = [];
  routeSub: any;
  positionTooltip = 'right';

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
      this.routeSub = this.route.params.subscribe(params => {
          this.searchInput = params['searchValue'];
      });
  }

  ngOnInit() {
      this.projectsService.getAllByFilter('status', 'accepted', 1).subscribe(
          res => {
              this.projects = res;
              for (let project of this.projects) {
                  if (project.projectName.toLowerCase().trim().replace(/%20/g, '')
                      === this.searchInput.toLowerCase().trim().replace(/%20/g, '')) {
                      this.resProjects.push(project);
                  }
              }
              console.log(this.resProjects);
          },
          err => {
          }
      );
  }

}
