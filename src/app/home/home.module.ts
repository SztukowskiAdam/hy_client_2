import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
})
export class HomeModule {}
