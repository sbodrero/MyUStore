import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../models/product/product.model";
import { CartService } from "../services/cart/cart.service";
import { CartItem } from "../models/cart-item/cart-item.model";

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  message: string;

  constructor(private cartService: CartService) {
    this.product = {
      id: 1,
      name: 'First product',
      price: 10,
      url: 'http://product',
      description: 'To avoid class error'
    };
    this.quantity = 0;
    this.message = "";
  }

  ngOnInit(): void {
    this.quantity = this.cartService.getCartItemQuantity(this.product);
  }

  onSubmit(): void {
    const cartItem: CartItem = {
      product: this.product,
      quantity: this.quantity
    }
    if(this.quantity == 0) {
      this.message = "Min quantity is 1";
    }
    else {
      this.message = "";
      this.cartService.addOrUpdateItem(cartItem);
      alert("Product added to cart")
    }
  }

}
