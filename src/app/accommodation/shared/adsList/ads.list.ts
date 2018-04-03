import { Component, Input } from "@angular/core";
import { AccommodationAdd } from "../../shared/models/accommodation.model";
import { UniversityAccommodationAdds } from "../../shared/models/university.accommodation.adds.model";
import { SharedDataService } from "../../../shared/data/shared.data.service";
import { AdsListService } from "./ads.list.service";

declare var $: any;

@Component({
    selector: 'adds-list',
    templateUrl: 'ads.list.html'
})

export class AddsList {

    @Input()
    accommodationAdds: AccommodationAdd[];
    @Input()
    showVisited: boolean;

    selectedItemId: number;


    constructor(private sharedDataService: SharedDataService,
        private adsListService: AdsListService) { }
    ngOnInit() {
    }

    ngOnChanges() {
        if (this.accommodationAdds != null && this.accommodationAdds.length > 0) {
            this.sharedDataService.emitAccommodationAdd(
                this.accommodationAdds[0]);
        }
    }

    addClick(accommodationAdd: AccommodationAdd) {

        if (this.showVisited && !accommodationAdd.userVisitedSw) {
            this.adsListService.setUserVisitedAdd(accommodationAdd)
                .subscribe(e => {
                    accommodationAdd.userVisitedSw = true;
                });
        }

        this.selectedItemId = accommodationAdd.addId;
        this.sharedDataService.emitAccommodationAdd(accommodationAdd);
    }
}