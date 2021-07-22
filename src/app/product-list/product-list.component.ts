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

  constructor(private productService : ProductService) {
    this.ProductList = []
  }

  ngOnInit(): void {
    this.ProductList = this.productService.getProducts();
  }
}
