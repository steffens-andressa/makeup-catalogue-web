import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'add', component: ProductComponent },
      { path: 'edit', component: ProductComponent }
    ]
  },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
