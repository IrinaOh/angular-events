import { Component, Input } from '@angular/core';
import { Customer } from '../model';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {

  @Input() customer: Customer;
  showAddress = true;
  left() {

  }
  right() {

  }
}
