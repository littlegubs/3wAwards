import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../../backend/services/Clients.service';
import {Client} from '../../../backend/model/Client';

@Component({
  selector: 'app-clients-cards',
  templateUrl: './clients-cards.component.html',
})
export class ClientsCardsComponent implements OnInit {

    pageNumber = 1;
    clients: Client[];

    constructor(private clientsService: ClientsService) {
    }

    ngOnInit() {
        this.clientsService.getAll(this.pageNumber).subscribe(
            res => {
                this.clients = res;
            },
            err => {
            }
        );
    }

    pagination(value: number): void {
        this.clients = undefined;
        this.pageNumber = this.pageNumber + value;
        this.clientsService.getAll(this.pageNumber).subscribe(
            res => {
                this.clients = res;
            },
            err => {
            }
        );
    }

}
