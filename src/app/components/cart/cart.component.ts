import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProductList: any;
  cartUpdate: any;
  message: any;
  quantity: any;
  totalSubSum = 0;
  vat = 0;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.doGet("getCart").subscribe((result) => {
      this.cartProductList = result;
      console.log(this.cartProductList);

      for (let i = 0; i < this.cartProductList.length; i++) {
        this.totalSubSum += (this.cartProductList[i].productPrice * this.cartProductList[i].quantity);
      }

      this.vat = this.totalSubSum * 0.05;

    })
  }

  updateCart(id: any, cartObj: any) {
    this.mainService.doUpdate("updateCart", id, cartObj).subscribe((result) => {

    })

    if (cartObj.quantity <= 0) {
      this.deleteCart(id);
    }

    window.location.reload();
  }



  deleteCart(id: any) {

    var isTrue = confirm('Are you sure you want to delete');
    if (isTrue) {
      this.mainService.doDeleteById("deleteCart", id).subscribe((data: any) => {
      })
      window.location.reload();
    }


  }


}
