import { Component, Input } from "@angular/core";
import { AccommodationAdd } from "../../accommodation/shared/models/accommodation.model";
import { AccommodationNotificationService } from "../../notifications/accommodation/notifications.accommodation.service";

declare var $: any;

@Component({
    selector: 'accommodation-notifications',
    templateUrl: 'notifications.accommodation.html'
})

export class AccommodationNotifications {

    accommodationAdds: AccommodationAdd[];

    constructor(private notificationService: AccommodationNotificationService) { }
    ngOnInit() {
        this.notificationService.getAccommodationNotifications()
            .subscribe(data => this.accommodationAdds = data);
    }

}