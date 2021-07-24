import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product/product.model';
import { ProductService } from "../services/product/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: Product[];
  message: string = '';

  constructor(private productService : ProductService) {
    this.ProductList = []
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.ProductList = products;
    });
  }

  receiveMessage(message: string): void {
    this.message = message;
    const self = this;
    setTimeout(function() {
      self.message = '';
    }, 3000);
  }
}
