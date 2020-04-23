import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  getAllItems() {
   /* const token = sessionStorage.getItem('token');*/
    /*const headers = new HttpHeaders({Authorization: 'Basic ' + token});*/
    const url = 'https://foodonline1.herokuapp.com/item/getItems';
    return this.http.get(url);
  }

  addToCart(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'https://foodonline1.herokuapp.com/cart/addItem/' + id;
    return this.http.get(url, {headers});
  }
}
