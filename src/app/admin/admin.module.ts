import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService], 
})

export class AdminModule { }
