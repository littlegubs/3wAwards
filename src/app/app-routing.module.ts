import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './front/home/home.component';
import {AgencyProfileComponent} from './front/agency-profile/agency-profile.component';
import {ClientProfileComponent} from './front/client-profile/client-profile.component';
import {MemberProfileComponent} from './front/member-profile/member-profile.component';
import {ProjectProfileComponent} from './front/project-profile/project-profile.component';
import {ProjectFormComponent} from "./front/project-form/project-form.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'agency/:id', component: AgencyProfileComponent},
    {path: 'client/:id', component: ClientProfileComponent},
    {path: 'project/:id', component: ProjectProfileComponent},
    {path: 'profile', component: MemberProfileComponent},
    {path: 'project', component: ProjectFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
