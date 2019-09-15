import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslateModule} from '@ngx-translate/core';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import {SearchComponent} from './search/search.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule,
    BarecodeScannerLivestreamModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    ProductsComponent,
    ProductComponent,
  ],
})
export class HomeModule {}
