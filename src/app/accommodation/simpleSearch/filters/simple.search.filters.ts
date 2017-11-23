import { Component } from "@angular/core";
import { environment } from "environments/environment";


@Component({
    selector: 'simple-search-filters',
    templateUrl: 'simple.search.filters.html'
})

export class SimpleSearchAddsFilters {

    leftSpinnerValues = []
    rightSpinnerValues = []
    leftSpinner: string;
    rightSpinner: string;
    selectedItem: string;
    ngOnInit() {
        this.leftSpinnerValues = environment.leftSpinnerValues;
        this.rightSpinnerValues = environment.apartmentTypes;
    }

    leftSpinnerClick($event) {
        console.log("came here");
        if ($event == environment.APARTMENT_TYPE) {

            this.rightSpinnerValues = environment.apartmentTypes;
            // this.getSimpleSearchAdds($event, this.rightSpinner);
        }
        else if ($event == environment.APARTMENT_NAME) {

            // this.simpleSearchService.getAllApartmentnames()
            // .subscribe(res => this.apartmentNames = res.json());

        }
        else if ($event == environment.GENDER) {

            this.rightSpinnerValues = environment.GENDER_CODES;
            // this.getSimpleSearchAdds($event, this.rightSpinner);
        }

    }


}