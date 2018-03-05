import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  param = {value: 'world'};

  constructor(translate: TranslateService)
    translate.setDefaultLang('en');

    translate.use('fr');
  }
}
