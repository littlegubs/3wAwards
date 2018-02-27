import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BootstrapModule} from '../bootstrap.module';
import {NbThemeModule} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    BootstrapModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  declarations: []
})
export class AdminModule { }
