import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private mainService: MainService) { }
  productList: any;
  slider: any;
  counter = 0;




  ngOnInit(): void {
    this.mainService.doGet("getProduct").subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    })

    this.mainService.doGet("getSlider").subscribe((data) => {
      this.slider = data;
      console.log(this.slider);

    })




  }





}
