import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { CartItem } from "../models/cart-item/cart-item.model";
import { CartService } from "../services/cart/cart.service";
import { Customer } from "../models/customer/customer.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItemList: CartItem[];
  @Output() customer: Customer;

  constructor(private cartService: CartService) {
    this.cartItemList = []
    this.customer = {
      fullName: '',
      address: '',
      creditCard: 0
    }
  }

  ngOnInit(): void {
    this.cartItemList = this.cartService.getCartItemList();
  }

  isCartNotEmpty(): boolean {
    return !_.isEmpty(this.cartItemList);
  }
}
