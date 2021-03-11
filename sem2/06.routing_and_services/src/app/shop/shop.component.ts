import { Component, OnInit } from '@angular/core';
import {Category, Product} from "../definitions";
import {DataService} from "../data.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories: Array<Category>;
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];


  constructor(private _dataService: DataService) {
    this.allCategories = this._dataService.getCategories();
  }

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
