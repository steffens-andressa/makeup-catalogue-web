import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Product } from './../model/product';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private url: string = 'http://localhost:3000/products';

  products!: Product[];
  constructor(private http: HttpClient) {
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
  }

  save(product: Product): Promise<Product | void> {
    return this.http.post<Product>(this.url, product, this.httpOptions).toPromise().then((product) => {
      this.getProducts().then((productList) => {
        if (productList && product) {
          this.products = productList;
          this.products.push(product);
          WebStorageUtil.set(Constants.PRODUCTS_KEY, this.products);
        }
      })
    })

  }

  update(product: Product): Promise<Product | void> {
    return this.http.put<Product>(this.url + '/' + product.id, product, this.httpOptions).toPromise().then(() => {
      this.getProducts().then((productList) => {
        if (productList && product) {
          this.products = productList;
          this.products.push(product);
          WebStorageUtil.set(Constants.PRODUCTS_KEY, this.products);
        }
      })
    });

  }

  delete(product: Product): Promise<boolean | void> {
    return this.http.delete(this.url + '/' + product.id).toPromise().then(() => {
      this.getProducts().then((productList) => {
        if (productList) {
          this.products = productList;
          WebStorageUtil.set(Constants.PRODUCTS_KEY, this.products);
        }
      })
    });
  }

  isExist(value: string): boolean {
    let result: boolean = false;
    this.products = WebStorageUtil.get(Constants.PRODUCTS_KEY);
    this.products?.forEach((p) => {
      if (p.name?.valueOf() == value?.valueOf()) {
        result = true;
      }
    })
    return result;
  }

  getProducts(): Promise<Product[] | undefined> {
    return this.http.get<Product[]>(this.url).toPromise();
  }
}