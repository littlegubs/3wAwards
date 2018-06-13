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
import {FrontComponent} from './front.component';
import {RequestJudgeFormComponent} from './request-judge-form/request-judge-form.component';
import {LoginGuard} from '../login.guard';
import {AwardsCardsComponent} from './awards-cards/awards-cards.component';
import {AgenciesCardsComponent} from './agencies-cards/agencies-cards.component';
import {ClientsCardsComponent} from './clients-cards/clients-cards.component';


const routes: Routes = [
    {path: '', component: FrontComponent ,
    children: [
      {path: '', component: HomeComponent},
      {path: 'agency/:id', component: AgencyProfileComponent},
      {path: 'client/:id', component: ClientProfileComponent},
      {path: 'project/:id', component: ProjectProfileComponent},
      {path: 'project/:id/vote', component: ProjectFormVoteComponent},
      {path: 'profile', component: MemberProfileComponent,  canActivate: [LoginGuard]},
      {path: 'project', component: ProjectFormComponent},
      {path: 'agencies', component: AgenciesCardsComponent},
      {path: 'clients', component: ClientsCardsComponent},
      {path: 'awards', component: AwardsCardsComponent},
      {path: 'addAgency', component: AddAgencyComponent},
      {path: 'request-judge', component: RequestJudgeFormComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule {
}
