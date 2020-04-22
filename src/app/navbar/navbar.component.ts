import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  bool;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.bool = 'false';
    } else {
      this.bool = 'true';
    }
    this.appService.loggedInUser().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    this.appService.isLoggedIn(false);
    this.router.navigate(['/login']);
    this.user.authorize = 'null';
  }
}
