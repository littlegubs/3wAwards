import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {Error404Component} from '../error404/error404.component';


const routes: Routes = [
    {path: 'admin', component: AdminMenuComponent},
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
