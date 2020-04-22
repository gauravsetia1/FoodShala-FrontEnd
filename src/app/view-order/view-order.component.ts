import { Component, OnInit } from '@angular/core';
import {ViewOrderService} from './view-order.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
user1;
  history;
  constructor(private viewOrderService: ViewOrderService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    } else {
      this.viewOrderService.viewOrder().subscribe((data) => {
        this.history = data;
        console.log(data);
      });
      this.appService.loggedInUser().subscribe(data => {
        this.user1 = data;
      });
    }
  }
}
