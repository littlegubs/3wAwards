import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Image } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImagesService extends BackendService<Image> {
  protected get resource() { return Image._resource; }
  protected get class() { return Image; }

}
