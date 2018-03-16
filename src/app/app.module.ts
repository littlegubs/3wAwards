import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import * as $ from 'jquery';
import {BootstrapModule} from './bootstrap.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatSlideToggleModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MenuComponent} from './front/menu/menu.component';
import {SearchComponent} from './front/search/search.component';
import {HomeComponent} from './front/home/home.component';
import {WebsiteComponent} from './front/website/website.component';
import {SliderComponent} from './front/slider/slider.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SiteCardComponent} from './front/site-card/site-card.component';
import {FooterComponent} from './front/footer/footer.component';
import {ConnectionDialogComponent} from './front/connection-dialog/connection-dialog.component';
import {AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';
import { HeaderComponent } from './front/header/header.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    ConnectionDialogComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BootstrapModule,
    MatButtonModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [ConnectionDialogComponent],
  providers: [
    AuthService,
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
