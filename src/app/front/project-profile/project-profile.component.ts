import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {Project} from '../../../backend/model/Project';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
})
export class ProjectProfileComponent implements OnInit {

    project: Project;
    toggleAgency = false;
    toggleMain = false;
    toggleDev = false;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectsService.get(params.id).subscribe(
                res => {
                    this.project = res;
                },
                err => {
                }
            );
        });
    }

}
