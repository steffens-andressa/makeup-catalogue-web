import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public products!: Product[];
  public product!: Product;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.params['id'];
    this.product = new Product('');
    this.productService.getProducts().then((productList) => {
      if (productList) {
        this.products = productList;
      }
    });
  }

}
