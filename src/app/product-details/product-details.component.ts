import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../model/product';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.params['id'];
    this.productService.getProducts().then((productList) => {
      if(productList) {
        this.products = productList;
      }
    });
  }

  onClickItem(p: Product) {
    this.router.navigate(['product', p?.id]);
  }

}
