import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { myShoppingCartComponent } from './myShoppingCart/myShoppingCart.component';
import { signInComponent } from './singIn/signIn.component';

export const routes: Routes = [
    { path: '', redirectTo: '/singIn', pathMatch: 'full' },
    { path: 'singIn', component: signInComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'myShoppingCart', component: myShoppingCartComponent }

];
