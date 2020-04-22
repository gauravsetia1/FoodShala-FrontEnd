import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RegistrationRestaurantsComponent} from './registration-restaurants/registration-restaurants.component';
import {RegistrationCustomersComponent} from './registration-customers/registration-customers.component';
import {AddItemComponent} from './add-item/add-item.component';
import {CartComponent} from './cart/cart.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {SuccessComponent} from './success/success.component';
import {MenuComponent} from './menu/menu.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'restaurants', component: RegistrationRestaurantsComponent},
  {path: 'customers', component: RegistrationCustomersComponent},
  {path: 'addItem', component: AddItemComponent},
  {path: 'cart', component: CartComponent},
  {path: 'vieworder', component: ViewOrderComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'menu', component: MenuComponent}
];
