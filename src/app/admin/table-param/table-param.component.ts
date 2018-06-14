import {Component, OnInit} from '@angular/core';
import {ParametersService} from '../../../backend/services';
import {Parameter} from '../../../backend/model';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-table-param',
  templateUrl: './table-param.component.html',
})
export class TableParamComponent implements OnInit {
  params: Parameter[];

  constructor(private paramsService: ParametersService, private http: HttpClient, private globalsService: GlobalsService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.paramsService.getAll().subscribe(
      res => {
        this.params = res;
      },
      err => {
      }
    );
  }

  updateParam(libelle: string, value: string): void {

    const body = new FormData();
    body.append('libelle', libelle);
    body.append('param', value);

    this.http.post(this.globalsService.updateParam, body).subscribe(
      res => {
        this.openSnackBar(libelle);
      },
      err => {
      }
    );
  }

  openSnackBar(libelle: string) {
    const message = 'Paramètre ' + libelle + ' modifié';
    this.snackBar.open(message,  'Ok', {
      duration: 2000
    });
  }

}
