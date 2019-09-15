import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, mapTo, tap} from 'rxjs/operators';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly EXPIRES_ID = 'EXPIRES_IN';

  private loginCredentials: LoginCredentials = {
    email: null,
    password: null
  };

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<TokenResponse|boolean> {
    this.loginCredentials.email = email;
    this.loginCredentials.password = password;
    return this.http.post<TokenResponse>(`${environment.servers.server}/api/login`, this.loginCredentials).pipe(
      tap((tokenResponse: TokenResponse) => this.storeToken(tokenResponse)),
      mapTo(true),
      catchError(error => {
        return of(false);
      })
    );
  }

  refreshToken() {
    return this.http.post<any>(`${environment.servers.server}/api/refresh`, {
    }).pipe(tap((response: TokenResponse) => {
      this.storeToken(response);
    }));
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${environment.servers.server}/api/logout`, {}).pipe(
      tap(() => this.logoutUser()),
      mapTo(true),
      catchError(error => {
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  storeToken(response: TokenResponse): boolean {
    localStorage.setItem(this.JWT_TOKEN, response.access_token);
    localStorage.setItem(this.EXPIRES_ID, String(response.expires_in));
    return true;
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  logoutUser() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.EXPIRES_ID);
  }

  register(registerCredentials: RegisterCredentials): Observable<TokenResponse|boolean> {
    return this.http.post<TokenResponse>(`${environment.servers.server}/api/register`, registerCredentials).pipe(
      tap((tokenResponse: TokenResponse) => this.storeToken(tokenResponse)),
      mapTo(true),
      catchError(error => {
        return of(false);
      })
    );
  }
}
