import { Component, input } from '@angular/core';
import { ListproudactService } from '../listproudact.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { filter } from 'rxjs';
import { ToyDetailsComponent } from '../toy-details/toy-details.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ToyDetailsComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  productList1: Product[] = [];
  age: number = 0;
  isDisplay: boolean = false;
  ProductToDisplay: Product;
  category1: string


  constructor(private productList: ListproudactService) {
    this.productList.getProductList().subscribe(data => {
      this.productList1 = data;
      console.log(this.productList1);
    }, (err) => {
      console.log(err);
    })
  }
  filterAge() {
    this.productList1 = this.productList1.filter(a => this.age <= a.targetAge)
  }
  sortPrice() {
    this.productList1 = this.productList1.sort((a: Product, b: Product) => a.price - b.price)
  }

  sortCategory(category1: string) {
    // this.productList.getByCategory(); 
    this.productList.getByCategory(this.category1).subscribe(data => {
      this.productList1 = data;
      console.log(this.productList1);
    }, (err) => {
      console.log(err);
    })
  }




  details(product: Product) {
    this.ProductToDisplay = product;
    this.isDisplay = true;
  }
  return() {
    this.isDisplay = false;
  }

}


