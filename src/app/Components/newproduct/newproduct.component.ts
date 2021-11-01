import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/product';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
})
export class NewproductComponent implements OnInit {
  productName: string = '';
  productImg: string = '';
  productPrice: number = 0;
  productCategory: number = 0;
  productQuantity: number = 0;
  productID: number = Date.now();
  newProduct!: Product;

  constructor(private productService: ProductService, private router: Router) {}
  addProduct() {
    this.newProduct = {
      id: this.productID,
      Name: this.productName,
      Price: this.productPrice,
      CategoryID: this.productCategory,
      ImgURL: this.productImg,
      Quantity: this.productQuantity,
    };
    this.productService.addProduct(this.newProduct).subscribe((product) => {
      this.router.navigateByUrl('/home');
      console.log(product);
    });
  }
  ngOnInit(): void {}
}
