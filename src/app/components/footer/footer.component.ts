import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  getSocialMedia: any;
  getCopyRight: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {

    this.mainService.doGetById("getSocialMedia", 102).subscribe((data) => {
      this.getSocialMedia = data;
    })

    this.mainService.doGetById("getCopyRight", 93).subscribe((data) => {
      this.getCopyRight = data;
    })
  }

}
