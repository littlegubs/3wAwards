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
import { TableParamComponent } from './table-param/table-param.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableMembersComponent} from './table-members/table-members.component';
import {TableAwardsComponent} from './table-awards/table-awards.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { AwardFormComponent } from './award-form/award-form.component';
import { TableJudgeComponent } from './table-judge/table-judge.component';
import { TableAgencyComponent } from './table-agency/table-agency.component';
import { TableClientComponent } from './table-client/table-client.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    TableProjectsComponent,
    TableMembersComponent,
    CardRecentProjectComponent,
    CardRecentAwardComponent,
    CardRecentSubmissionComponent,
    TableParamComponent,
    TableAwardsComponent,
    AwardFormComponent,
    ConfirmDialogComponent,
    TableJudgeComponent,
    TableAgencyComponent,
    TableClientComponent
  ],
  entryComponents: [
      ConfirmDialogComponent,
  ],
})
export class AdminModule {
}
