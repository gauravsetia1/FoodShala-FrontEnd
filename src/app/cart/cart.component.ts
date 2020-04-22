import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {CartService} from './cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product;
  total = 0;

  constructor(private appService: AppService, private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    } else {
    this.cartService.showCart().subscribe((data) => {
      this.product = data;
      console.log(data);
      let sum = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.product.length; i++) {
        sum = sum + Number(this.product[i].items.unitPrice) * Number(this.product[i].quantity);
      }
      this.total = sum;
      // tslint:disable-next-line:only-arrow-functions
    });
    this.router.navigate(['/cart']);
  }
  }

  up(id) {
    this.cartService.increment1(id).subscribe((data3) => {
      console.log(data3);
      this.cartService.showCart().subscribe((data1) => {
        this.product = data1;
        let sum = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.product.length; i++) {
          sum = sum + Number(this.product[i].items.unitPrice) * Number(this.product[i].quantity);
        }
        this.total = sum;
      });
    });
  }

  down(id) {
    this.cartService.decrement1(id).subscribe((data4) => {
      console.log(data4);
      this.cartService.showCart().subscribe((data1) => {
        this.product = data1;
        let sum = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.product.length; i++) {
          sum = sum + Number(this.product[i].items.unitPrice) * Number(this.product[i].quantity);
        }
        this.total = sum;
      });
    });
  }

  remove(id) {
    this.cartService.deleteItem(id).subscribe((data) => {
      /*this.product = data;*/
      this.cartService.showCart().subscribe((data1) => {
        this.product = data1;
        let sum = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.product.length; i++) {
          sum = sum + Number(this.product[i].items.unitPrice) * Number(this.product[i].quantity);
        }
        this.total = sum;
      });
    });
  }

  checkoutCart() {
    this.cartService.checkout().subscribe(data => {
      console.log(data);
      this.router.navigate(['/success']);
    });
  }
}
