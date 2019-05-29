import { Component, Input } from '@angular/core';
import { Address } from '../model';

@Component({
  selector: 'address',
  templateUrl: './address.component.html'
})

export class AddressComponent {
  @Input() address: Address;

  regions = ['East', 'North', 'South', 'West', 'Midwest'];
  states = ['California', 'Quebec', 'Illinois', 'Jalisco'];
}
