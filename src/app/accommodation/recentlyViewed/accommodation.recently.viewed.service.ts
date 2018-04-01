import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from 'app/shared/Interceptor/HttpInterceptorService';

@Injectable()
export class RecentlyViewedService {
    constructor(public http: HttpInterceptorService) { }

    getAccommodationNotifications() {
        return this.http.get(environment.getAccommodationNotifications).map((res: Response) => res.json());
    }

}