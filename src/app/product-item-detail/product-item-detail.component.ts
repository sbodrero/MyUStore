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
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.product = {
      id: 1,
      name: 'First product',
      price: 10,
      url: '',
      description: 'To avoid class error'
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(parseInt(id)).subscribe(product => {
          this.product = product;
        });
      }
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
