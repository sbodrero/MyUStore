import { Injectable } from '@angular/core';
import {CartItem} from "../../models/cart-item/cart-item.model";
import { Product } from "../../models/product/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: CartItem[];
  constructor() {
    this.cartItemList = []
  }

  addOrUpdateItem(cartItem: CartItem) {
    const itemIndex = this.cartItemList.findIndex(item => item.product.id == cartItem.product.id);
    if(itemIndex > -1 || itemIndex == 0) {
      this.cartItemList[itemIndex].quantity = cartItem.quantity;
    } else {
      this.cartItemList.push(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    const index = this.cartItemList.findIndex(item => item.product.id == cartItem.product.id );
    if (index != -1) {
      this.cartItemList.splice(index, 1);
    }
  }

  getCartItemList() {
    return this.cartItemList;
  }

  getCartItemQuantity(product: Product): number {
    const item = this.cartItemList.find(item => item.product.id == product.id);
    return item && item.quantity || 0;
  }
}
