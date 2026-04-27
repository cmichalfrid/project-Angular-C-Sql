import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ListproudactService } from '../listproudact.service';


@Component({
  selector: 'app-toy-details',
  standalone: true,
  imports: [],
  templateUrl: './toy-details.component.html'
})
export class ToyDetailsComponent {


  @Input() ProductToDisplay: Product;
  @Output() goBack: EventEmitter<any> = new EventEmitter<any>();

  return() {
    this.goBack.emit()
  }
  constructor(private service: ListproudactService) {

  }
  add_to_shopping_cart(ProductToDisplay: Product) {
    if (this.service.sum <= 5000) {
      this.service.addToShoppingCart(ProductToDisplay)
      alert("המוצר נוסף בהצלחה לסל!")
    }
    else if (this.service.sum >= 100) {
      alert("הקניה נחסמה")
    }

  }

}