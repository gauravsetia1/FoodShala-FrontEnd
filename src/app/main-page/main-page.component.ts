import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {MainPageService} from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  list;
  user;
    constructor(private router: Router, public appService: AppService, private  mainPageService: MainPageService ) { }

  ngOnInit() {
      this.mainPageService.getAllItems().subscribe(data => {
        this.list = data;
        console.log(data);
      });
      this.appService.loggedInUser().subscribe(data => {
        this.user = data;
        console.log(data);
      });
  }

  check(id) {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    }
    if (this.user.authorize == 'customer') {
       if (!this.appService.checkLogin()) {
        this.router.navigate(['/login']);
      } else {
         this.mainPageService.addToCart(id).subscribe(data => {
           alert('Order added to Cart');
           this.router.navigate(['/cart']);
         });
       }
    }
  }
}
