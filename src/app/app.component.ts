import {Component, OnInit} from '@angular/core';
import {TranslatorService} from './translator/translator.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translator: TranslatorService) {

  }
  ngOnInit() {
    this.translator.initTranslations();
  }
}




