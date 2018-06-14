import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../../backend/services';
import {Client} from '../../../backend/model';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html'
})
export class TableClientComponent implements OnInit {

  pageNumber = 1;
  clients: Client[];

  constructor(private clientsService: ClientsService, public snackBar: MatSnackBar) { }

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

  removeClient(client: Client): void {
    this.clientsService.remove(client).subscribe(
      res => {
        this.openSnackBar();
        for (let i = 0; i < this.clients.length; i++) {
          if (this.clients[i].id === client.id) {
            this.clients.splice(i, 1);
          }
        }
      },
      err => {
      }
    );
  }

    openSnackBar(): void {
        this.snackBar.open('Client supprimé', 'Ok', {
            duration: 2000
        });
    }

}
