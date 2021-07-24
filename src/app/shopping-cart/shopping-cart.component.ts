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
  submitted: boolean = false;
  customer: Customer;
  message: string = '';

  constructor(private cartService: CartService) {
    this.cartItemList = []
    this.customer = {
      fullName: "",
      address: "",
      creditCard: ""
    }
  }

  ngOnInit(): void {
    this.cartItemList = this.cartService.getCartItemList();
  }

  isCartEmpty(): boolean {
    return _.isEmpty(this.cartItemList);
  }

  totalCart() {
    return this.cartItemList.reduce((total: number, item) => {
      total += item.quantity * item.product.price;
      return total;
    }, 0).toFixed(2)
  }

  receiveCustomer(customer: Customer): void {
    this.customer = customer;
    this.submitted = true;
  }

  cartNotChecked(): boolean {
    return !_.isEmpty(this.cartItemList) && !this.submitted;
  }

  showSuccessMessage() {
    return this.submitted === true;
  }

  receiveMessage(message: string): void {
    this.message = message;
    const self = this;
    setTimeout(function() {
      self.message = '';
    }, 3000);
  }

  getProductPriceByQuantity(quantity: number, price: number): number {
    const returnValue = (quantity * price);
    return parseFloat(returnValue.toFixed(2));
  }
}
