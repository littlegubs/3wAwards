import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbLayoutModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';

@NgModule({
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
})

export class AdminModule { }
