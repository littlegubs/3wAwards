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
    businessSectorTags = [];

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectsService.get(params.id).subscribe(
                res => {
                    this.project = res;
                    for (const tag of this.project.tags) {
                        console.log(tag.type.libelle);
                        /* @todo Put this in a function, mutualise this ? infinite if for each tagsType ??? */
                        if (tag.type.libelle === 'business_sector') {
                            this.businessSectorTags.push(tag);
                        }
                    }
                    console.log(this.businessSectorTags);
                },
                err => {
                }
            );
        });
    }

}
