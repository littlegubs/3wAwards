import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientsService} from '../../../backend/services';
import {Client} from '../../../backend/model';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
})
export class ClientProfileComponent implements OnInit {
  client: Client;
  nominatedSites = 0;
  earnedAward = 0;

  constructor( private route: ActivatedRoute, private clientsService: ClientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.clientsService.get(params.id).subscribe(
          res => {
            this.client = res;
            this.nominatedSites = Object.keys(this.client.projects).length;
            for (let i = 0; i < this.nominatedSites; i++) {
              this.earnedAward = this.earnedAward + Object.keys(this.client.projects[i].awards).length;
            }
          },
          err => {
          }
        );
      }
    });
  }

  deleteClient(client: Client) {
    this.clientsService.remove(client).subscribe(
      res => {
        console.log('Sucess');
      },
      err => {
        console.log('error');
      }
    );
  }

}
