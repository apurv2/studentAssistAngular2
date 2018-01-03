import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NotificationSettingsService } from 'app/notifications/notifications.subscribe.modal.service';
import { NotificationSettings } from 'app/notifications/models/notification.settings.model';
import { UniversityApartments } from 'app/accommodation/shared/models/university.apartments.model';
import { SharedDataService } from 'app/shared/data/shared.data.service';
import { University } from "app/accommodation/shared/models/universities.list.model";
import { CheckBoxModel } from 'app/shared/models/checkbox.model';
import { Apartment } from 'app/accommodation/shared/models/apartment.names.model';

@Component({
    selector: 'notification-settings',
    templateUrl: 'notifications.subscribe.modal.html',
})
export class SubscribeNotificationsModal {

    constructor(public dialogRef: MatDialogRef<SubscribeNotificationsModal>,
        private notificationService: NotificationSettingsService,
        private sharedDataService: SharedDataService) { }

    notificationSettings: NotificationSettings;
    selectedUniversityDetails: UniversityApartments;
    selectedUniversityId: number;
    universityNames: University;
    checkboxes = [];
    genderValues = [
        'Male',
        'Female',
    ];
    selectedGender: string;

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.getNotificationSettings();

        let userUniversities: University[] = this.sharedDataService.
            getUserSelectedUniversitiesList();

    }

    getNotificationSettings() {

        this.notificationService.getNotificationSettings().
            subscribe(notificationSettings => {
                this.notificationSettings = notificationSettings;
                this.selectedUniversityId = this.notificationSettings.universityId;

                this.setSelectedUnivAptNames();

                setTimeout(() => {
                    this.populateCheckBoxNgModel();
                }, 500);
            });

    }

    setSelectedUnivAptNames() {

        for (let university of this.notificationSettings.apartmentNames) {
            if (university.universityId == this.selectedUniversityId) {
                this.selectedUniversityDetails = university;
            }
        }
    }

    populateCheckBoxNgModel() {

        for (let aptName of this.selectedUniversityDetails.apartmentNames) {

            let value = this.notificationSettings.apartmentName.
                indexOf(aptName.apartmentName) != -1 ? true : false;

            this.checkboxes[aptName.apartmentName] = value;
        }

        for (let aptType of this.notificationSettings.apartmentType) {

            let value = this.notificationSettings.apartmentType.
                indexOf(aptType) != -1 ? true : false;
            this.checkboxes[aptType] = value;
        }

        this.selectedGender = this.notificationSettings.gender;
    }
}





