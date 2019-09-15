import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {APP_ROUTING} from './app.routing';

const appRoutes: Routes = [
  {
    path: APP_ROUTING.HOME,
    loadChildren: () => import('./home/home.module').then( mod => mod.HomeModule)
  },
  {
    path: APP_ROUTING.APP,
    loadChildren: () => import('./core/core.module').then( mod => mod.CoreModule)
  },
  {
    path: APP_ROUTING.AUTH,
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: APP_ROUTING.PAGE_NOT_FOUND,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
