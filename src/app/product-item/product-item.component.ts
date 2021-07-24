import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() added: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.product = {
      id: 1,
        name: 'First product',
      price: 10,
      url: 'http://product',
      description: 'To avoid class error'
    };
  }

  ngOnInit(): void {
  }

  receiveMessage(message: string): void {
    this.added.emit("Product added to cart");
  }
}
