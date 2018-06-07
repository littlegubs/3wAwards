import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BootstrapModule} from './bootstrap.module';
import {NbThemeModule, NbSidebarModule, NbLayoutModule, NbSidebarService} from '@nebular/theme';
import {
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSortModule
} from '@angular/material';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ConnectionDialogComponent} from './front/connection-dialog/connection-dialog.component';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';
import {RegistrationDialogComponent} from './front/registration-dialog/registration-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MenuComponent} from './front/menu/menu.component';
import {SearchComponent} from './front/search/search.component';
import {HomeComponent} from './front/home/home.component';
import {WebsiteComponent} from './front/website/website.component';
import {SliderComponent} from './front/slider/slider.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {SiteCardComponent} from './front/site-card/site-card.component';
import {FooterComponent} from './front/footer/footer.component';
import {HeaderComponent} from './front/header/header.component';
import {AgencyProfileComponent} from './front/agency-profile/agency-profile.component';
import {RestangularModule} from 'ngx-restangular';
import {RestangularConfigFactory} from '../backend/services/RestangularConfigFactory';
import {
  AgenciesService,
  AwardsService,
  CategoriesService,
  ClientsService,
  CreditsService,
  ImagesService,
  MembersService,
  ProjectRatingMembersService,
  ProjectsService,
  RatingsService,
  TagsService,
  TypeAgenciesService,
  TypeTagsService,
  TargetsService,
  SiteTypesService
} from '../backend/services';
import {LiipPipe} from './liip.pipe';
import {GlobalsService} from './globals.service';
import {ClientProfileComponent} from './front/client-profile/client-profile.component';
import {MemberProfileComponent} from './front/member-profile/member-profile.component';
import {MemberFormProfileComponent} from './front/member-form-profile/member-form-profile.component';
import {FormService} from '../backend/forms';
import {TagsFilterPipe} from './tags-filter.pipe';
import {ProjectProfileComponent} from './front/project-profile/project-profile.component';
import {AddAgencyComponent} from './front/add-agency/add-agency.component';
import {ProjectFormComponent} from './front/project-form/project-form.component';
import {FilterComponent} from './front/filter/filter.component';
import {StarRatingModule} from 'angular-star-rating';
import {ClientCardComponent} from './front/client-card/client-card.component';
import {AgencyCardComponent} from './front/agency-card/agency-card.component';
import {MemberAwardProjectTableComponent} from './front/member-award-project-table/member-award-project-table.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {RouterModule} from '@angular/router';
import {ProjectFormVoteComponent} from './front/project-form-vote/project-form-vote.component';
import { UpdateFormAgencyComponent } from './front/update-form-agency/update-form-agency.component';
import { AddClientComponent } from './front/add-client/add-client.component';
import { UpdateClientComponent } from './front/update-client/update-client.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function createRestangularConfigFactory(RestangularProvider) {
  if (localStorage.getItem('user_token') !== null) {
    RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer ' + localStorage.getItem('user_token')});
  }
  return RestangularConfigFactory(RestangularProvider, {baseUrl: 'http://127.0.0.1:8000'});
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    WebsiteComponent,
    SliderComponent,
    SiteCardComponent,
    FooterComponent,
    ConnectionDialogComponent,
    HeaderComponent,
    RegistrationDialogComponent,
    HeaderComponent,
    AgencyProfileComponent,
    ClientProfileComponent,
    MemberProfileComponent,
    LiipPipe,
    TagsFilterPipe,
    MemberFormProfileComponent,
    ProjectProfileComponent,
    AddAgencyComponent,
    ProjectFormComponent,
    FilterComponent,
    ClientCardComponent,
    AgencyCardComponent,
    MemberAwardProjectTableComponent,
    AdminPageComponent,
    ProjectFormVoteComponent,
    UpdateFormAgencyComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BootstrapModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
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
    NgCircleProgressModule.forRoot({}),
    RestangularModule.forRoot([], createRestangularConfigFactory),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StarRatingModule.forRoot(),
    NbThemeModule.forRoot({name: 'default'}),
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  entryComponents: [
    ConnectionDialogComponent,
    RegistrationDialogComponent
  ],
  providers: [
    NbSidebarService,
    AgenciesService,
    AwardsService,
    CategoriesService,
    ClientsService,
    CreditsService,
    ImagesService,
    MembersService,
    FormService,
    ProjectRatingMembersService,
    ProjectsService,
    RatingsService,
    TagsService,
    TargetsService,
    SiteTypesService,
    TypeAgenciesService,
    TypeTagsService,
    AuthService,
    GlobalsService,
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
