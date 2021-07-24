import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from "../models/customer/customer.model";


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Output() customerAdded: EventEmitter<Customer> = new EventEmitter();
  customer: Customer;
  constructor() {
    this.customer = {
      fullName: "",
      address: "",
      creditCard: ""
    }
 }

  ngOnInit(): void {
    // do nothing.
  }

  onSubmit(): void {
    const customer: Customer = this.customer;
    this.customerAdded.emit(customer);
  }

  // @ts-ignore
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
