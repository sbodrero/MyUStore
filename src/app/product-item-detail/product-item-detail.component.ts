import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/product/product.model';
import { ProductService } from "../services/product/product.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.product = {
      id: 1,
      name: 'First product',
      price: 10,
      url: 'http://product',
      description: 'To avoid class error'
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.product  = this.productService.getProductById(parseInt(id));
      }
    });
  }

}
