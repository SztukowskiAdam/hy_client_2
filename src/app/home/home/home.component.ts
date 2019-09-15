import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarecodeScannerLivestreamComponent} from 'ngx-barcode-scanner';
import {Router} from '@angular/router';
import {HOME_ROUTING} from '../home.routing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent, {static: false}) barecodeScanner: BarecodeScannerLivestreamComponent;

  private barcodeValue: any;
  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.barecodeScanner.retart();
    this.barecodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    console.log(this.barcodeValue);
    this.barecodeScanner.stop();
    this.router.navigateByUrl(HOME_ROUTING.PRODUCTS + '/' + this.barcodeValue);
  }

}
