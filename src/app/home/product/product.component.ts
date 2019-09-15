import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarecodeScannerLivestreamComponent} from 'ngx-barcode-scanner';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from './product.service';
import {Product} from './product.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  code: string;
  product: Product;
  constructor(private route: ActivatedRoute, private productSerice: ProductService, private spinner: NgxSpinnerService) {
    this.code = this.route.snapshot.paramMap.get('code');
    console.log(this.code);
  }

  ngOnInit() {
    this.spinner.show();
    this.productSerice.search(this.code).subscribe((product: Product) => {
      this.product = product;
    });
    this.spinner.hide();
  }
}
