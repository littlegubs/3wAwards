import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: '', loadChildren: 'app/front/front.module#FrontModule'},
    {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
