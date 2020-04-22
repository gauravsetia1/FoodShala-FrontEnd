import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.appService.checkLogin()) {
      this.router.navigate(['/login']);
    }
  }

}
