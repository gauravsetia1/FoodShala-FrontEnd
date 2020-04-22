import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationRestaurantsComponent } from './registration-restaurants/registration-restaurants.component';
import { RegistrationCustomersComponent } from './registration-customers/registration-customers.component';
import { LoginComponent } from './login/login.component';
import {AppService} from './app.service';
import {AuthenticationService} from './authentication.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './add-item/add-item.component';
import {MainPageService} from './main-page/main-page.service';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart/cart.service';
import { ViewOrderComponent } from './view-order/view-order.component';
import {ViewOrderService} from './view-order/view-order.service';
import { SuccessComponent } from './success/success.component';
import { MenuComponent } from './menu/menu.component';
import {MenuService} from './menu/menu.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegistrationRestaurantsComponent,
    RegistrationCustomersComponent,
    LoginComponent,
    NavbarComponent,
    AddItemComponent,
    CartComponent,
    ViewOrderComponent,
    SuccessComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppService,
    AuthenticationService,
    MainPageService,
    CartService,
    ViewOrderService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
