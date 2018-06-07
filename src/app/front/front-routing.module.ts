import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AgencyProfileComponent} from './agency-profile/agency-profile.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {MemberProfileComponent} from './member-profile/member-profile.component';
import {ProjectProfileComponent} from './project-profile/project-profile.component';
import {ProjectFormComponent} from './project-form/project-form.component';
import {AddAgencyComponent} from './add-agency/add-agency.component';
import {ProjectFormVoteComponent} from './project-form-vote/project-form-vote.component';
import {Error404Component} from '../error404/error404.component';
import {FrontComponent} from './front.component';
import {UpdateFormAgencyComponent} from './update-form-agency/update-form-agency.component';
import {UpdateProjectFormComponent} from './update-project-form/update-project-form.component';


const routes: Routes = [
    {path: '', component: FrontComponent ,
    children: [
      {path: '', component: HomeComponent},
      {path: 'agency/:id', component: AgencyProfileComponent},
      {path: 'client/:id', component: ClientProfileComponent},
      {path: 'project/:id', component: ProjectProfileComponent},
      {path: 'project/:id/vote', component: ProjectFormVoteComponent},
      {path: 'profile', component: MemberProfileComponent},
      {path: 'project', component: ProjectFormComponent},
      {path: 'agency', component: AddAgencyComponent},
      {path: 'update-agency/:id', component: UpdateFormAgencyComponent},
      {path: 'update-project/:id', component: UpdateProjectFormComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule {
}
