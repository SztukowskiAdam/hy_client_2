import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HOME_ROUTING} from './home.routing';

const coreRoutes: Routes = [
  { path: HOME_ROUTING.HOME, component: HomeComponent }
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
