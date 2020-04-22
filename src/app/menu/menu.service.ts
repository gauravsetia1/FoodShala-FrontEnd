import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor(private http: HttpClient) {}

  getMenu() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:6060/item/getMenu';
    return this.http.get(url, {headers});
  }
}
