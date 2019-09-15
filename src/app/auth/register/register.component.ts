import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService, TokenResponse} from '../auth.service';
import {Router} from '@angular/router';
import {APP_ROUTING} from '../../app.routing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
  }

  register() {
    const password = this.registerForm.get(['password']).value;
    this.registerForm.addControl('password_confirmation', new FormControl());
    this.registerForm.patchValue({password_confirmation: password});
    this.authService.register(this.registerForm.getRawValue()).subscribe((response: TokenResponse|boolean) => {
      if (response !== false) {
        this.router.navigate([APP_ROUTING.APP]);
      }
    }, error => {
      console.log(error);
    });
  }
}
