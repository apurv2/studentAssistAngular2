import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class RecentlyViewedService {
    constructor(public http: Http) { }

    getRecentlyViewedAdds(position: number) {

        return this.http.get(environment.getRecentlyViewedAdds + "?position=" + position)
            .map(res => res.json());
    }

}