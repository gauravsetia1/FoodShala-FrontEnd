import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name;
  image;
  description;
  unitPrice;
  category;
  url = 'http://localhost:6060/item/addItems';
  constructor(private http: HttpClient, private router: Router, private appService: AppService) { }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    }
  }

  addItem() {
    if (this.name != null && this.category != null && this.image != null && this.description != null && this.unitPrice != null) {
      const ar = {name: this.name, category: this.category, image: this.image, description: this.description, unitPrice: this.unitPrice};
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post(this.url, ar, {headers}).subscribe( data => {
        console.log(data);
        alert('Item Added');
        this.router.navigate(['/home']);
      });
    } else {
      alert('Fill All Marked Fields');
    }
  }

}
