import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public products!: Product[];
  private a: Product = new Product(1,"Anome","Amarca","Acor","Atipo",50, new Date());
  private b: Product = new Product(2, "Bnome", "Bmarca", "Bcor", "Btipo", 60, new Date());

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.params['id'];
    this.products = [this.a,this.b];
  }

  onClickItem(p: Product) {
    this.router.navigate(['product', p?.id]);
  }

}
