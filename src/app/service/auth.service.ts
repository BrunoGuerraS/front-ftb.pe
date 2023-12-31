import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }
  login (email: string, password: string) {
    return this.http.post(`${this.API_URL}/auth/login`, { email, password });
  }
  profile () {

  }
}
