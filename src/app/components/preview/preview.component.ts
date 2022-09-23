import { Cart } from './../../Model/Cart';
import { MainService } from './../../services/main.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  product: any;
  productId: any;
  brand: any;
  category: any;
  cart = new Cart(0, 0, "", 0, 1, "");
  dontRedirect = false;

  constructor(private mainService: MainService, private currentRoute: ActivatedRoute) { }




  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe((data: any) => {
      this.productId = data.params.id;
      console.log(this.productId);
    })


    this.mainService.doGetById("getProduct", this.productId).subscribe((data) => {
      this.product = data;

      this.mainService.doGetById("getCategoryById", this.product.categoryId).subscribe((data) => {
        this.category = data;
        console.log(this.category);

      })
      this.mainService.doGetById("getBrandById", this.product.brandId).subscribe((data) => {
        this.brand = data;
      })
      console.log(this.product);

    })


    // for (let i = 0; i < this.cartProductList.length; i++) {
    //   if (this.productId == this.cartProductList[i].productId) {
    //     this.isExist = true;
    //   }
    // }




  }




  addToCart() {

    if (this.cart.quantity <= 0) {
      confirm('Quantity can not be less than or equal to 0.');
      this.dontRedirect = false;
    } else {
      this.cart.productId = this.product.productId;
      this.cart.productName = this.product.productName;
      this.cart.productPrice = this.product.productPrice;
      this.cart.imageUrl = this.product.productImgPath;
      this.dontRedirect = true;
      this.mainService.doPost("postCart", this.cart).subscribe()
      console.log("Not matched");

    }

  }



}

