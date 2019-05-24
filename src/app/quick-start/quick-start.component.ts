import { Component } from '@angular/core';

@Component({
    selector: 'quick-start',
    templateUrl: './quick-start.component.html'
})

export class QuickStartComponent {
    name = "Alex Smith"
    image = "favicon.ico"
    color = 'red'

    street = '123 main str'
    city = 'Lehi'
    region = 'West'
    hideAddress = false
    clicked() {
        this.color = this.color === 'red' ? 'blue' : 'red'
    }

    colorChange(color: string) {
        this.color = color
    }

    addressClick() {
        this.hideAddress = !this.hideAddress
    }

    regionChange(region: string) {
        this.region = region;
    }
}