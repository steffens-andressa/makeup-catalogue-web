import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Input() imgUrl: string;
  @Input() notSkincare: boolean;
  @Input() notMakeup: boolean;


  constructor() {
    this.productName = '';
    this.imgUrl = '';
    this.notSkincare = false;
    this.notMakeup = false; 
   }

  ngOnInit(): void {
  }

}
