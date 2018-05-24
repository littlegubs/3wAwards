import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {Project} from '../../../backend/model/Project';
import {MatDialog} from '@angular/material';
import {ProjectFormVoteComponent} from "../project-form-vote/project-form-vote.component";
import {number} from 'ng2-validation/dist/number';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
})
export class ProjectProfileComponent implements OnInit {

    project: Project;
    toggleAgency = false;
    toggleMain = false;
    toggleDev = false;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService, public dialog: MatDialog) {
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

    openDialog() {
        const dialogRef = this.dialog.open(ProjectFormVoteComponent, {
            width: '530px',
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }

}
