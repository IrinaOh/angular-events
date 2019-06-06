import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class DataService {
    private customersUrl = 'api/customers';
    constructor(
        private loggerService: LoggerService,
        private http: Http) { }

    getCustomersP(): Promise<Customer[]> {
        this.loggerService.log(`Got customers as a promise`);
        const customers = createTestCustomers();

        return this.http.get(this.customersUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.loggerService.log(`Got ${customers.length} customers`);
                return custs;
            });

        // return new Promise<Customer[]>(resolve => {
        //     setTimeout(() => {
        //         this.loggerService.log(`Got ${customers.length} customers`);
        //         resolve(customers);
        //     }, 1500);
        // });
    }

    getCustomers(): Observable<Customer[]> {
        this.loggerService.log(`Got customers as an Observable`);
        const customers = createTestCustomers();
        return of(customers)
            .pipe(delay(1500))
            .do(() => {
                this.loggerService.log(`Got ${customers.length} customers`);
            });
    }
}