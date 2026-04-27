import { Component, Injectable } from '@angular/core';
import { ListproudactService } from '../listproudact.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common'
import { ToyDetailsComponent } from '../toy-details/toy-details.component'
import { Baydetails } from '../models/baydetails';
import { Bay } from '../models/bay';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myShoppingCart',
  standalone: true,
  imports: [CommonModule, ToyDetailsComponent, FormsModule],
  templateUrl: './myShoppingCart.component.html'
})

export class myShoppingCartComponent {

  shoppingCart1: Product[] = [];
  sum1: any
  isFinish: boolean
  purchase: Bay
  note: string

  constructor(private shopping_cart_service: ListproudactService) {

    shopping_cart_service.getShoppingCart().then(data => this.shoppingCart1 = data);
    this.sum1 = shopping_cart_service.sum
  }
  delete(product: Product) {
    const index = this.shoppingCart1.findIndex(p => p.id === product.id);

    if (index !== -1) {
      this.shoppingCart1.splice(index, 1);
    }
    this.shopping_cart_service.shopping_cart = this.shoppingCart1;
    this.sum1 = this.shopping_cart_service.sum - product.price;
    this.shopping_cart_service.sum = this.sum1;
    alert("המוצר נמחק מהסל!")
  }
  finish() {
    this.isFinish = true
  }
  ok() {
    this.shopping_cart_service.note = this.note
  }
}
