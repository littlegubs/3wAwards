import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatPaginatorModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],

  exports: [
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule
  ],
  providers: [
    MatNativeDateModule
  ],
})
export class SharedModule {
}
