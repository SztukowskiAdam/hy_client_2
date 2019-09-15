import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../product/product.interface';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.productService.all().subscribe((product: Product[]) => {
      this.products = product;
    });
    this.spinner.hide();
  }
}
