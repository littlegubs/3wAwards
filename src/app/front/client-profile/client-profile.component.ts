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

  constructor( private route: ActivatedRoute, private clientsService: ClientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.clientsService.get(params.id).subscribe(
          res => {
            this.client = res;
          },
          err => {
          }
        );
      }
    });
  }

}
