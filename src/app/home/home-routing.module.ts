import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HOME_ROUTING} from './home.routing';
import {SearchComponent} from './search/search.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';
import {RankingComponent} from './ranking/ranking.component';

const coreRoutes: Routes = [
  { path: HOME_ROUTING.HOME, component: HomeComponent },
  { path: HOME_ROUTING.SEARCH, component: SearchComponent },
  { path: HOME_ROUTING.PRODUCTS, component: ProductsComponent },
  { path: HOME_ROUTING.PRODUCTS_SEARCH, component: ProductComponent },
  { path: HOME_ROUTING.RANKING, component: RankingComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
