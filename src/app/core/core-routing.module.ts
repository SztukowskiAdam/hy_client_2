import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CORE_ROUTING} from './core.routing';
import {CoreGuard} from './core.guard';
import {CoreComponent} from './core/core.component';

const coreRoutes: Routes = [
  {
    path: CORE_ROUTING.CORE,
    canActivate: [CoreGuard],
    component: CoreComponent,
    children: [
      {path: CORE_ROUTING.CORE, component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
