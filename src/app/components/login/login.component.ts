import { Customer } from './../../Model/customer';
import { Login } from './../../Model/login';
import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;
  customer: Customer = new Customer(0, "Name", "City", "Zip-Code", "E-mail", "Address", "null", "Phone", "Password");
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }


  doPostAdmin() {
    this.mainService.doPost("postCustomer", this.customer).subscribe((data: any) => {
      this.message = data;
    })
  }

}
