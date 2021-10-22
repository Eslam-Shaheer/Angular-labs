import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
})
export class ProductsViewComponent implements OnInit {
  myDate: Date = new Date();
  show: boolean = false;
  prdoductsList: Product[] = [];
  @Input() sentCatIDFrmMaster: number = 0;
  greating: string = 'Thanks for purchasing from our Store';
  @Output() totalPriceChanged: EventEmitter<number> =
    new EventEmitter<number>();
  totalOrderPrice: number = 0;
  UserCartItems: Product[] = [];
  @Output() shoppingCartItems: EventEmitter<any> = new EventEmitter<any>();

  selectedCategory(): any {
    if (this.sentCatIDFrmMaster) {
      return this.prdoductsList.filter((item) => {
        return item.CategoryID == this.sentCatIDFrmMaster;
      });
    } else {
      return this.prdoductsList;
    }
  }
  showMessage(Product: any): void {
    Product.Quantity--;

    // this.show = !this.show;
  }
  constructor() {
    this.prdoductsList = [
      {
        ID: 1,
        Name: 'Iphone se',
        Price: 10000,
        Quantity: 101,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Iphone x',
        Price: 11200,
        Quantity: 2,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Ipohne 6s',
        Price: 15000,
        Quantity: 110,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 1,
      },
      {
        ID: 4,
        Name: 'Huwaei mate 10',
        Price: 6400,
        Quantity: 240,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 2,
      },
      {
        ID: 5,
        Name: 'Huwaei p30',
        Price: 7500,
        Quantity: 50,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 2,
      },
      {
        ID: 6,
        Name: 'Huwaei p40',
        Price: 5600,
        Quantity: 30,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 2,
      },
      {
        ID: 7,
        Name: 'Mi Note 5',
        Price: 4700,
        Quantity: 2,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
      {
        ID: 5,
        Name: 'Mi Note 6',
        Price: 5800,
        Quantity: 1,
        ImgURL: 'assets/mi-11-lite-product-image-pink_grande.png',
        CategoryID: 3,
      },
      {
        ID: 6,
        Name: 'Mi Note 7',
        Price: 3900,
        Quantity: 0,
        ImgURL: 'assets/mi-11-lite-product-image-blue_grande_1.png',
        CategoryID: 3,
      },
    ];
  }

  ngOnInit(): void {}
  calcTotalPrice(item: any, itemCount: any) {
    this.totalOrderPrice += +item.Price * +itemCount;
    this.totalPriceChanged.emit(this.totalOrderPrice);
    for (let i = 0; i < itemCount; i++) {
      this.UserCartItems.push(item);
    }

    console.log(this.UserCartItems);
    this.shoppingCartItems.emit(this.UserCartItems);

    if (item.Quantity < itemCount) {
      alert('There is not enoght Quantity');
    }
    if (item.Quantity >= itemCount) {
      item.Quantity -= itemCount;
    }
  }
}
