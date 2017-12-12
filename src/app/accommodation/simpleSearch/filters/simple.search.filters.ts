import { Component } from "@angular/core";
import { SharedDataService } from "../../../shared/data/shared.data.service";
import { environment } from "../../../../environments/environment";
import { AccommodationSearchModel } from "../../shared/models/accommodation.filter.model";
import { University } from "../../shared/models/universities.list.model";


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
        this.leftSpinnerValues = environment.leftSpinnerValues;
        this.rightSpinnerValues = environment.apartmentTypes;
        this.leftSpinnerSelectedItem = this.leftSpinnerValues[0].description;
        this.rightSpinnerSelectedItem = environment.apartmentTypes[0].description;
    }

    constructor(private sharedDataService: SharedDataService) {

    }

    leftSpinnerClick($event) {
        if ($event == environment.APARTMENT_TYPE) {

            this.rightSpinnerValues = environment.apartmentTypes;
            this.rightSpinnerSelectedItem = environment.apartmentTypes[0].description;

            let filterData: AccommodationSearchModel = new AccommodationSearchModel();
            filterData.leftSpinner = environment.APARTMENT_TYPE;
            filterData.rightSpinner = this.rightSpinnerSelectedItem;

            let universities: University[] = this.sharedDataService.getUserSelectedUniversitiesList();
            let universityIds: number[] = new Array<number>();
            if (universities != null) {
                for (let university of universities) {
                    universityIds.push(university.uinversityId);
                }

                filterData.universityIds = universityIds;
                this.sharedDataService.emitAccommomdationSearchFilters(filterData);

            }
            // to be deleted
            filterData.universityIds = universityIds;
            this.sharedDataService.emitAccommomdationSearchFilters(filterData);
        }
        else if ($event == environment.APARTMENT_NAME) {

            // this.simpleSearchService.getAllApartmentnames()
            // .subscribe(res => this.apartmentNames = res.json());

        }
        else if ($event == environment.GENDER) {

            this.rightSpinnerValues = environment.GENDER_CODES;
            this.rightSpinnerSelectedItem = environment.GENDER_CODES[0].description;
            // this.getSimpleSearchAdds($event, this.rightSpinner);
        }

    }


}