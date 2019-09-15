import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarecodeScannerLivestreamComponent} from 'ngx-barcode-scanner';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HOME_ROUTING} from '../home.routing';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private searchForm: FormGroup;
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.searchForm = new FormGroup({
      code: new FormControl(),
    });
  }

  search() {
    this.spinner.show();
    const code = this.searchForm.getRawValue().code;
    this.router.navigateByUrl(HOME_ROUTING.PRODUCTS + '/' + code);
  }
}
