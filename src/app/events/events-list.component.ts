import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular connect',
        date: '9/12/2020',
        time: '10:00 am',
        price: 199.99,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

}
