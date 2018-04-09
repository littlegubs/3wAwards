import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Client } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsService extends BackendService<Client> {
  protected get resource() { return Client._resource; }
  protected get class() { return Client; }

}
