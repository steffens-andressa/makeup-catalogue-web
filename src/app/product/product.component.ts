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
    this.products = this.productService.getProducts();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.productService.isExist(this.product.name)) {
      this.productService.save(this.product);
    } else {
      this.productService.update(this.product);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Product was added to your vanity!';
    this.form.reset();
    this.product = new Product('');
    this.products = this.productService.getProducts();
  }

    /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de usuários cadastrados sem pressionar o submit.
   * @param product
   */
     onEdit(product: Product) {
      this.product= product;
    }

    onDelete(name: string) {
      let confirmation = window.confirm(
        'Você tem certeza que deseja remover ' + name
      );
      if (!confirmation) {
        return;
      }
      let response: boolean = this.productService.delete(name);
      this.isShowMessage = true;
      this.isSuccess = response;
      if (response) {
        this.message = 'It was gone!';
      } else {
        this.message = 'Oops! cannot remove it!';
      }
      this.products = this.productService.getProducts();
    }

}
