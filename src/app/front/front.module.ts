import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {SharedModule} from '../shared.module';
import {FrontRoutingModule} from './front-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LiipPipe} from '../liip.pipe';
import {TagsFilterPipe} from '../tags-filter.pipe';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {StarRatingModule} from 'angular-star-rating';

import {ConnectionDialogComponent} from './connection-dialog/connection-dialog.component';
import {RegistrationDialogComponent} from './registration-dialog/registration-dialog.component';
import {MenuComponent} from './menu/menu.component';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {WebsiteComponent} from './website/website.component';
import {SliderComponent} from './slider/slider.component';
import {SiteCardComponent} from './site-card/site-card.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {AgencyProfileComponent} from './agency-profile/agency-profile.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {MemberProfileComponent} from './member-profile/member-profile.component';
import {MemberFormProfileComponent} from './member-form-profile/member-form-profile.component';
import {ProjectProfileComponent} from './project-profile/project-profile.component';
import {AddAgencyComponent} from './add-agency/add-agency.component';
import {ProjectFormComponent} from './project-form/project-form.component';
import {FilterComponent} from './filter/filter.component';
import {ClientCardComponent} from './client-card/client-card.component';
import {AgencyCardComponent} from './agency-card/agency-card.component';
import {MemberAwardProjectTableComponent} from './member-award-project-table/member-award-project-table.component';
import {ProjectFormVoteComponent} from './project-form-vote/project-form-vote.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    NgCircleProgressModule.forRoot({}),
    StarRatingModule.forRoot(),
    FrontRoutingModule
  ],
  entryComponents: [
    ConnectionDialogComponent,
    RegistrationDialogComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    WebsiteComponent,
    SliderComponent,
    SiteCardComponent,
    ConnectionDialogComponent,
    RegistrationDialogComponent,
    AgencyProfileComponent,
    ClientProfileComponent,
    MemberProfileComponent,
    MemberFormProfileComponent,
    ProjectProfileComponent,
    AddAgencyComponent,
    ProjectFormComponent,
    FilterComponent,
    ClientCardComponent,
    AgencyCardComponent,
    MemberAwardProjectTableComponent,
    ProjectFormVoteComponent,
    LiipPipe,
    TagsFilterPipe
  ]
})
export class FrontModule { }
