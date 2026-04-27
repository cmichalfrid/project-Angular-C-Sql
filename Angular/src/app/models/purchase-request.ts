import { Bay } from "./bay";
import { Baydetails } from "./baydetails";
export class PurchaseRequest {

  purchase: Bay;
  purchaseDetails: Baydetails[];

  constructor(pu: Bay, pude: Baydetails[]) {
    this.purchase = pu;
    this.purchaseDetails = pude;
  }

}
