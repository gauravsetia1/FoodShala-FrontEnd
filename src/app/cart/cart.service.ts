import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  showCart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/showcart';
    return this.http.get(url, {headers});
  }

  increment1(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/increment/1/' + id;
    return this.http.get(url, {headers});
  }

  decrement1(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/decrement/1/' + id;
    return this.http.get(url, {headers});
  }

  deleteItem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/deleteItem/' + id;
    return this.http.get(url, {headers});
  }

  checkout() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/checkout';
    return this.http.get(url, {headers});
  }
}
