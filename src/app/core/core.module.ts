import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreComponent} from './core/core.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    TranslateModule,
  ],
  declarations: [
    DashboardComponent,
    CoreComponent,
  ]
})
export class CoreModule {}
