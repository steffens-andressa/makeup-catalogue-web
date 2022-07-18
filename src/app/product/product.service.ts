import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Product } from './../model/product';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products!: Product[];
  constructor() {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
  }

  save(product: Product) {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    console.log(JSON.stringify(this.products))
    this.products.push(product);
    WebStorageUtil.set(Constants.PRODUCTS_KEY, this.products);
  }

  update(product: Product) {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    this.delete(product.name);
    this.save(product);
  }

  delete(productName: string): boolean {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    this.products = this.products.filter((p) => {
      return p.name?.valueOf() != productName?.valueOf();
    });

    WebStorageUtil.set(Constants.PRODUCTS_KEY, this.products);
    return true;
  }

  isExist(value: string): boolean {
    let result: boolean = false;
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    this.products.forEach((p) => {
      if (p.name?.valueOf() == value?.valueOf()) {
        result = true;
      }
    })
    return result;
  }

  getProducts(): Product[] {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    return this.products;
  }
}