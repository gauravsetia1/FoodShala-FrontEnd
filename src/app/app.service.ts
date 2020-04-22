import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    /*console.log(auth);*/
    return JSON.parse(auth);
  }

  loggedInUser() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:6060/users/logUser';
    return this.http.get(url, {headers});
  }

  getusers() {
    const url = 'http://localhost:6060/users/getUsers';
    return this.http.get(url);
  }
}
