import { Input, Component } from "@angular/core";
import { AccommodationAdd } from "../models/accommodation.model";
import { SharedDataService } from "../../../shared/data/shared.data.service";
import { MatDialog } from "@angular/material";
import { SubscribeNotificationsModal } from "app/accommodation/shared/modals/subscribe.notifications.modal";


@Component({
    selector: 'accommodation-details',
    templateUrl: 'accommodation.details.add.html'
})


export class AddDetails {

    @Input()
    selectedAccommodationAdd: AccommodationAdd;

    constructor(private dialog: MatDialog) { }
    ngOnInit() {

    }

    openNotificationSettingsModal() {

    }

    makeLink() {

    }

    subscribe() {
        this.openDialog();
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(SubscribeNotificationsModal);

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}