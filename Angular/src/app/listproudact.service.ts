import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { promises } from 'dns';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
import { ProductsComponent } from './products/products.component';
import { Clients } from './models/clients';
import { Bay } from './models/bay';
import { PurchaseRequest } from './models/purchase-request';
import { BehaviorSubject } from 'rxjs';
import { Baydetails } from './models/baydetails';


@Injectable({
  providedIn: 'root'
})
export class ListproudactService {
  productList: Product[] = []
  shopping_cart: Product[] = []
  productByCategory: Product[] = []
  purchaseDetails: Baydetails[] = []
  categoryServer: string
  sum: number = 0
  amount: number = 1
  clientId: number
  note: string
  b: Bay
  id: number
  purchaseDate: Date
  product: any
  item: any
  a: Baydetails

  nameSource = new BehaviorSubject<string>(''); // ערך ברירת מחדל
  currentName = this.nameSource.asObservable();

  setName(newName: string) {
    this.nameSource.next(newName); // שידור הערך החדש
  }
  constructor(
    private http: HttpClient) {
  }
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:5041/Product");
  }

  addToShoppingCart(ProductToDisplay: Product) {

    const existingProduct = this.shopping_cart.find(a => a.productName === ProductToDisplay.productName);

    if (!existingProduct) {

      ProductToDisplay.amount = 1;
      this.shopping_cart.push(ProductToDisplay);
      this.sum += ProductToDisplay.price;
    } else {

      existingProduct.amount += 1;
      this.sum += ProductToDisplay.price;
    }
  }

  getShoppingCart(): Promise<Product[]> {
    return Promise.resolve(this.shopping_cart)
  }
  getByCategory(category1: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:5041/ProductByCategory/${category1}`);
  }

  getByNumber(checkNumber: string): Observable<Clients> {
    return this.http.get<Clients>(`http://localhost:5041/Client/${checkNumber}`)
  }

  addClient(c: Clients): Observable<Clients> {
    return this.http.post<Clients>(`http://localhost:5041/Client`, c)

  }
  createArry(purchase: Bay) {
    for (let i = 0; i < this.shopping_cart.length; i++) {
      const product = this.shopping_cart[i];
      const purchaseDetail = new Baydetails(0, 0, product.id, product.amount);
      this.purchaseDetails.push(purchaseDetail);
      console.log(purchaseDetail)
    }
    const FullPurchase = new PurchaseRequest(purchase, this.purchaseDetails)
    this.addPurchase(FullPurchase).subscribe(data => {
      alert("הקניה בוצעה בהצלחה!!!")
    }

    )

  }

  addPurchase(FullPurchase: PurchaseRequest): Observable<PurchaseRequest> {
    return this.http.post<PurchaseRequest>(``, FullPurchase)
  }
}