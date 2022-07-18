import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product/product.service';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

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
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.params['id'];
    this.products = this.productService.getProducts();
  }

  onClickItem(p: Product) {
    this.router.navigate(['product', p?.id]);
  }

}
