import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {Error404Component} from '../error404/error404.component';
import {AdminComponent} from './admin.Component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
    {path: 'admin', component: AdminComponent,
      children: [
        {path: '', component: AdminDashboardComponent}
      ] },
    {path: '404', component: Error404Component},
    {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
