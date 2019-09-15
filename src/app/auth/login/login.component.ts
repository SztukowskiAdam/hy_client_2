import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {AuthService, TokenResponse} from '../auth.service';
import {Router} from '@angular/router';
import {CORE_ROUTING} from '../../core/core.routing';
import {APP_ROUTING} from '../../app.routing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    const email = this.loginForm.getRawValue().email;
    const password = this.loginForm.getRawValue().password;
    this.authService.login(email, password).subscribe((response: TokenResponse|boolean) => {
      if (response !== false) {
        this.router.navigate([APP_ROUTING.APP]);
      }
    }, error => {
      console.log(error);
    });
  }
}
