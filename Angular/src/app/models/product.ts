export class Product {
  id: number;
  productName: string;
  categoryName: number;
  companyName: number;
  productDes: string;
  price: number;
  targetAge: number;
  picture: string;
  lastUpdate: Date;
  amount: number;
  constructor(id: number, productName: string, categoryName: number, companyName: number, productDes: string, price: number, lastUpdate: Date, targetAge: number, picture: string) {
    this.id = id;
    this.productName = productName;
    this.companyName = companyName;
    this.categoryName = categoryName;
    this.productDes = productDes;
    this.lastUpdate = lastUpdate;
    this.picture = picture;
    this.price = price;
    this.targetAge = targetAge;
    this.amount = 1
  }
}
