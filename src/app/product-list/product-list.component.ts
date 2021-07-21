import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: Product[];

  constructor(private productService : ProductService) {
    this.ProductList = [{
      id: 1,
      name: 'First product',
      price: 10,
      url: 'http://product',
      description: 'To avoid class error'
    }]
  }

  ngOnInit(): void {
    this.ProductList = this.productService.getProducts();
  }

}
