import {Product} from "../product/product.model";

export class CartItem {
  product: Product;
  quantity: number;

  constructor(obj?: any) {
    this.product = obj && obj.product || null;
    this.quantity = obj && obj.quantity || null;
  }
}
