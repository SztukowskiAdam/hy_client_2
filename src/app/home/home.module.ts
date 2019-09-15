import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule,
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class HomeModule {}
