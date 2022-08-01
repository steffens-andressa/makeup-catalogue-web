import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  public products!: Product[];
  public product!: Product;

  @Input() productName: string;
  @Input() imgUrl: string;
  @Input() notSkincare: boolean;
  @Input() notMakeup: boolean;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productName = '';
    this.imgUrl = '';
    this.notSkincare = false;
    this.notMakeup = false;
  }

  ngOnInit(): void {
    let idParam = this.route.snapshot.params['id'];
    this.product = new Product('');
    this.productService.getProducts().then((productList) => {
      if (productList) {
        this.products = productList;
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.productService.isExist(this.product.name)) {
      this.productService.save(this.product).then(()=> {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Product was added to your vanity!';
        this.form.reset();
        this.product = new Product('');
        this.productService.getProducts().then((productList => {
          if (productList) {
            this.products = productList;
          }
        }));
    
      });
    } else {
      this.productService.update(this.product).then(() => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Product was updated to your vanity!';
        this.form.reset();
        this.product = new Product('');
        this.productService.getProducts().then((productList => {
          if (productList) {
            this.products = productList;
          }
        }));
    
      });
    }
  }

  onEdit(product: Product) {
    this.product = product;
  }

  onDelete(product: Product) {
    let confirmation = window.confirm(
      'Are you sure you want to remove ' + product.name + ', ' + product.brand + '?'
    );
    if (!confirmation) {
      return;
    }
    this.productService.delete(product).then(() => {
      this.isShowMessage = true;
      this.message = 'It was gone!';
      this.productService.getProducts().then((productList => {
        if (productList) {
          this.products = productList;
        }
      }));

    });
  }

}
