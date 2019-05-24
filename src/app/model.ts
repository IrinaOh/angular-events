export class Customer {
    id: number
    name: string
    address: Address
}

class Address {
    city: string
    street: string
    state: string
    region: string
}