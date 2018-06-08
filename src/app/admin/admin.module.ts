import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { TableProjectsComponent } from './table-projects/table-projects.component';
import {CardRecentProjectComponent} from './card-recent-project/card-recent-project.component';
import {CardRecentAwardComponent} from './card-recent-award/card-recent-award.component';
import {CardRecentSubmissionComponent} from './card-recent-submission/card-recent-submission.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    TableProjectsComponent,
    CardRecentProjectComponent,
    CardRecentAwardComponent,
    CardRecentSubmissionComponent
  ]
})
export class AdminModule {
}
