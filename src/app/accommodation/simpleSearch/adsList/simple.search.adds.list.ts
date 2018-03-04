import { Component, Input, Host, Output, EventEmitter } from "@angular/core";
import { AccommodationAdd } from "../../shared/models/accommodation.model";
import { UniversityAccommodationAdds } from "../../shared/models/university.accommodation.adds.model";
import { SharedDataService } from "../../../shared/data/shared.data.service";
import { SimpleSearchFilterService } from "../filters/simple.search.filters.service";
import { environment } from "environments/environment";
import { AccommodationSearchModel } from "../../shared/models/accommodation.filter.model";
import { SimpleSearch } from "../accommodation.simple.search";
import { SimpleSearchAddsFilters } from "../filters/simple.search.filters";
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';


declare var $: any;

@Component({
    selector: 'simple-search-list',
    templateUrl: 'simple.search.ads.list.html'
})

export class SimpleSearchAddsList {

    @Input()
    accommodationSearchResults: UniversityAccommodationAdds[];
    @Input()
    filters: SimpleSearchAddsFilters;
    selectedItemId: number;
    timerObservable: Subscription;


    constructor(private sharedDataService: SharedDataService,
        private simpleSearchService: SimpleSearchFilterService) { }

    ngOnInit() {
        $('.collapsible').collapsible();

        this.timerObservable = Observable
            .interval(2000)
            .first()
            .subscribe(x => $('.collapsible').collapsible('open', 0));
    }

    ngOnChanges() {
        if (this.accommodationSearchResults != null && this.accommodationSearchResults.length > 0) {
            this.sharedDataService.emitAccommodationAdd(
                this.accommodationSearchResults[0].accommodationAdds[0]);
            this.filters.stopLoding();
        }
    }

    addClick(accommodationAdd: AccommodationAdd) {
        this.selectedItemId = accommodationAdd.addId;
        this.sharedDataService.emitAccommodationAdd(accommodationAdd);
    }

    paginationClick(selectedUniversity: UniversityAccommodationAdds) {
        selectedUniversity.paginating = true;

        let search: AccommodationSearchModel = this.filters.getSpinners();
        search.selectedUniversityId = selectedUniversity.universityId;
        search.paginationPosition = selectedUniversity.accommodationAdds.length + 1;

        this.simpleSearchService
            .getSimpleSearchAddsForPagination(environment.getSimpleSearchAddsPagination, search)
            .subscribe((data: AccommodationAdd[]) => {

                data
                    .map(add => this.accommodationSearchResults
                        .find(university => university.universityId == selectedUniversity.universityId)
                        .accommodationAdds
                        .push(add));
                selectedUniversity.paginating = false;
                selectedUniversity.stopPagination = data.length < 10;

            });
    }

    ngOnDestroy() {
        this.timerObservable.unsubscribe();
    }

}