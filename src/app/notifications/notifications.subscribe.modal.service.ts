import { Observable } from "rxjs/Observable";
import { NotificationSettings } from "app/notifications/models/notification.settings.model";
import { environment } from "environments/environment";
import { Http } from '@angular/http';

import { Injectable } from "@angular/core";

@Injectable()
export class NotificationSettingsService {

    constructor(private http: Http) { }

    getNotificationSettings() {
        return this.http.get(environment.getAllApartmentsWithType).
            map(res => res.json());
    }

}