import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarecodeScannerLivestreamComponent} from 'ngx-barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent, {static: false}) barecodeScanner: BarecodeScannerLivestreamComponent;

  private barcodeValue: any;
  constructor() { }

  ngAfterViewInit() {
    this.barecodeScanner.start().then(response => {
      console.log(response);
    });
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    console.log(this.barcodeValue);
  }

}
