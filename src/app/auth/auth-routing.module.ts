import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {NgModule} from '@angular/core';
import {AUTH_ROUTING} from './auth.routing';
import {APP_ROUTING} from '../app.routing';
import {RegisterComponent} from './register/register.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {EmailVerificationComponent} from './email-verification/email-verification.component';

const routes: Routes = [
  { path: AUTH_ROUTING.AUTH,
    pathMatch: 'full',
    redirectTo: '/' + APP_ROUTING.AUTH + '/' + AUTH_ROUTING.LOGIN,
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTING.LOGIN,
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTING.REGISTER,
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTING.PASSWORD_RESET,
    component: PasswordResetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AUTH_ROUTING.EMAIL_VERIFICATION,
    component: EmailVerificationComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }
