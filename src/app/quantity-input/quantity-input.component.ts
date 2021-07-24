import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Input() select: boolean = false;
  @Output() added: EventEmitter<string> = new EventEmitter();
  quantity: number;
  errorMessage: string;
  message: string;

  constructor(private cartService: CartService) {
    this.quantity = 0;
    this.errorMessage = "";
    this.message = "";
    this.product = {
      id: 1,
      name: 'First product',
      price: 10,
      url: '',
      description: 'To avoid class error'
    };
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.quantity = this.cartService.getCartItemQuantity(this.product);
  }

  onSubmit(): void {
    const cartItem: CartItem = {
      product: this.product,
      quantity: this.quantity
    }
    if(this.quantity == 0) {
      this.errorMessage = "Min quantity is 1";
    }
    else {
      this.errorMessage = "";
      this.cartService.addOrUpdateItem(cartItem);
      this.added.emit("Product added to cart");
    }
  }

  showSelect(): boolean {
    return this.select == true;
  }

  onQuantityChange(value: number): void {
    const cartItem: CartItem = {
      product: this.product,
      quantity: value
    }
    if(value == 0) {
      this.cartService.removeItem(cartItem);
      this.added.emit("Product removed from cart");
    } else {
      this.cartService.addOrUpdateItem(cartItem);
      this.added.emit("Cart updated");
    }
  }
}
