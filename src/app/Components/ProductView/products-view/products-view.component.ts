import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ShoppingCartItems } from 'src/app/Models/shopping-cart-items';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
})
export class ProductsViewComponent implements OnInit, OnChanges {
  myDate: Date = new Date();
  show: boolean = false;
  prdoductsList: Product[] = [];
  @Input() sentCatIDFrmMaster: number = 0;
  greating: string = 'Thanks for purchasing from our Store';
  totalOrderPrice: number = 0;
  UserCartItems: Product[] = [];
  @Output() addItemToshoppingCartItems: EventEmitter<ShoppingCartItems> =
    new EventEmitter<ShoppingCartItems>();

  productNeededCount: number = 0;

  showMessage(Product: any): void {
    Product.Quantity--;

    // this.show = !this.show;
  }
  constructor(private productService: ProductService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.sentCatIDFrmMaster) {
      this.prdoductsList = this.productService.getProductsByCatID(
        this.sentCatIDFrmMaster
      );
    } else {
      this.prdoductsList = this.productService.getAllProducts();
    }
  }

  ngOnInit(): void {}

  increase(inputVal: any, product: Product) {
    if (product.Quantity) {
      product.Quantity--;
      inputVal.value++;
    } else {
      alert('Not Enough Quantity');
    }

    this.addItemToshoppingCartItems.emit({
      productID: product.ID,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: inputVal.value,
      productImg: product.ImgURL,
      productQuantity: product.Quantity,
    });
  }
  decrease(inputVal: any, product: Product) {
    if (inputVal.value > 0) {
      product.Quantity++;
      inputVal.value--;
    }

    this.addItemToshoppingCartItems.emit({
      productID: product.ID,
      productName: product.Name,
      unitPrice: product.Price,
      selectedQuantity: inputVal.value,
      productImg: product.ImgURL,
      productQuantity: product.Quantity,
    });
  }
}
