import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();

  showAddress = true;

  left() {
    this.shift.emit(-1);
  }
  right() {
    this.shift.emit(1);
  }
}
