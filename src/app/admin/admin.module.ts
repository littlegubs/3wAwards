import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import { MenuComponent } from './menu/menu.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.Component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    MenuComponent,
    AdminComponent
  ]
})
export class AdminModule {
}
