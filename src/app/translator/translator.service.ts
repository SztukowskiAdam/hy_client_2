import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {

  constructor(private translateService: TranslateService) {}

  initTranslations() {
    this.translateService.setDefaultLang(environment.default_lang);
    if (environment.use_default_lang) {
      this.translateService.use(environment.default_lang);
    } else {
      const userLanguage = this.translateService.getBrowserLang();
      this.translateService.getTranslation(userLanguage).subscribe(lang => {
        this.translateService.use(userLanguage);
      }, error => {
        this.translateService.use(environment.default_lang);
      });
    }
  }

  setLanguage(language: string) {
    this.translateService.setDefaultLang(language);
  }
}
