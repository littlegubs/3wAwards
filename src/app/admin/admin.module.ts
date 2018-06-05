import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared.module';
import {StarRatingModule} from 'angular-star-rating';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgCircleProgressModule.forRoot({}),
    StarRatingModule.forRoot(),
  ],
  declarations: []
})
export class AdminModule { }
