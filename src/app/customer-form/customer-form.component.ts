import { Component, OnInit } from '@angular/core';
import { Customer } from "../models/customer/customer.model";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  fullName: string;
  address: string;
  creditCard: number;
  constructor() {
    this.fullName = "George Lamaître",
    this.address = "17 rue de la pompe 44000 Nantes",
    this.creditCard = 1000000000000
 }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
