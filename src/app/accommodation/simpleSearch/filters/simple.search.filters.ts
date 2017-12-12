import { Component } from "@angular/core";
import { SharedDataService } from "../../../shared/data/shared.data.service";
import { environment } from "../../../../environments/environment";
import { AccommodationSearchModel } from "../../shared/models/accommodation.filter.model";
import { University } from "../../shared/models/universities.list.model";
import { SimpleSearchFilterService } from "./simple.search.filters.service";
import { ApartmentName } from "../../shared/models/apartment.names.model";


@Component({
    selector: 'simple-search-filters',
    templateUrl: 'simple.search.filters.html'
})

export class SimpleSearchAddsFilters {

    leftSpinnerValues = []
    rightSpinnerValues = []
    leftSpinner: string;
    rightSpinner: string;
    leftSpinnerSelectedItem: string;
    rightSpinnerSelectedItem: string;

    ngOnInit() {
        this.initializeSpinners();
    }

    constructor(private sharedDataService: SharedDataService,
        private simpleSearchFilterService: SimpleSearchFilterService) {
    }


    initializeSpinners() {
        this.leftSpinnerValues = environment.leftSpinnerValues;
        this.rightSpinnerValues = environment.apartmentTypes;
        this.leftSpinnerSelectedItem = this.leftSpinnerValues[0].description;
        this.rightSpinnerSelectedItem = environment.apartmentTypes[0].description;

    }

    leftSpinnerClick($event) {
        if ($event == environment.APARTMENT_TYPE) {

            this.rightSpinnerValues = environment.apartmentTypes;
            this.rightSpinnerSelectedItem = environment.apartmentTypes[0].description;
            this.emitSpinnerClick(false);

        }
        else if ($event == environment.APARTMENT_NAME) {
            this.emitSpinnerClick(true);
        }
        else if ($event == environment.GENDER) {

            this.rightSpinnerValues = environment.GENDER_CODES;
            this.rightSpinnerSelectedItem = environment.GENDER_CODES[0].description;
            this.emitSpinnerClick(false);
        }

    }

    rightSpinnerClick(clickedItem: string) {
        this.emitSpinnerClick(false);
    }

    emitSpinnerClick(apartmentName: boolean) {

        let filterData: AccommodationSearchModel = new AccommodationSearchModel();
        filterData.leftSpinner = this.leftSpinnerSelectedItem;
        filterData.rightSpinner = this.rightSpinnerSelectedItem;

        let universities: University[] = this.sharedDataService.getUserSelectedUniversitiesList();
        let universityIds: number[] = new Array<number>();
        if (universities != null) {
            for (let university of universities) {
                universityIds.push(university.uinversityId);
            }

            filterData.universityIds = universityIds;
            if (apartmentName) {
                this.simpleSearchFilterService.getApartmentNames(filterData).
                    map(apartmentNames => this.mapApartmentNames(apartmentNames),
                    filterData.rightSpinner = this.rightSpinnerSelectedItem).
                    map(data => this.sharedDataService.emitAccommomdationSearchFilters(filterData));
            }
            else {
                this.sharedDataService.emitAccommomdationSearchFilters(filterData);
            }
        }
        // to be deleted
        // filterData.universityIds = universityIds;
        // this.sharedDataService.emitAccommomdationSearchFilters(filterData);
    }

    mapApartmentNames(apartments: ApartmentName[]) {

        for (let apartment of apartments) {
            this.rightSpinnerValues.push(apartment.apartmentName);
        }

        this.rightSpinnerSelectedItem = this.rightSpinnerValues[0];
    }

}