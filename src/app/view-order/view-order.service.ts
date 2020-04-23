import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewOrderService {

  constructor(private http: HttpClient) {}

  viewOrder() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/order/vieworder';
    return this.http.get(url, {headers});
  }

  loggedInUser() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/users/logUser';
    return this.http.get(url, {headers});
  }

}
