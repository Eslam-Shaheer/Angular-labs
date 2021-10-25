import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss'],
})
export class CategorySearchComponent implements OnInit, OnChanges {
  categoriesList: Category[] = [];
  selectedCategory: number = 0;
  cartItems: any[] = [];
  a: number = 0;
  totalPrice: number = 0;
  totalPriceWithTax: number = 0;
  constructor(private productService: ProductService) {
    this.categoriesList = [
      {
        ID: 1,
        Name: 'Iphone',
      },
      {
        ID: 2,
        Name: 'Xiaomi',
      },
      {
        ID: 3,
        Name: 'Huwaei',
      },
    ];
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  addItemToshoppingCartItems(UserCartItems: any) {
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;
    let newItem = this.cartItems.find(
      (item) => UserCartItems.productID == item.productID
    );

    if (newItem) {
      newItem.selectedQuantity = UserCartItems.selectedQuantity;
      if (newItem.selectedQuantity == 0) {
        this.cartItems.splice(newItem, 1);
      }
    } else {
      if (UserCartItems.selectedQuantity != 0) {
        this.cartItems.push(UserCartItems);
      }
    }

    for (let i of this.cartItems) {
      this.totalPrice += i.unitPrice * i.selectedQuantity;
      this.totalPriceWithTax = this.totalPrice * 1.14;
    }
  }
  calc(boughtCount: any, Product: any) {
    if (boughtCount.value > Product.selectedQuantity) {
      Product.selectedQuantity = boughtCount.value;
      this.totalPrice += Product.unitPrice;
      this.totalPriceWithTax += Product.unitPrice * 1.14;
    } else {
      this.totalPrice -= Product.unitPrice;
      Product.selectedQuantity = boughtCount.value;
      this.totalPriceWithTax -= Product.unitPrice * 1.14;
    }
  }
}
