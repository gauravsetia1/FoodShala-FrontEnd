import { Component, OnInit } from '@angular/core';
import {MenuService} from './menu.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu;
  constructor(private menuService: MenuService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    } else {
      this.menuService.getMenu().subscribe(data => {
        this.menu = data;
      });
    }
  }
}
