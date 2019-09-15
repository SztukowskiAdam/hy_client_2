import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {APP_ROUTING} from '../app.routing';

@Injectable({
  providedIn: 'root'
})
export class CoreGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([APP_ROUTING.AUTH]);
    }
    return this.authService.isLoggedIn();
  }
}
