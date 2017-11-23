import { environment } from "environments/environment";
import { SimpleSearchService } from "app/accommodation/simpleSearch/accommodation.simple.search.service";
import { AccommodationAdd } from "app/accommodation/shared/models/accommodation.model";
import { Component } from "@angular/core";
import { FacebookService } from "ngx-facebook";
import { Aparment } from 'app/accommodation/shared/models/accommodation.apartments';
import { SharedDataService } from "../../shared/data/shared.data.service";
import { AccommodationFilterData } from "../shared/models/accommodation.filter.model";

@Component({
    selector: 'simple-search',
    templateUrl: 'accommodation.simple.search.html'
})

export class SimpleSearch {
    leftSpinnerValues: any = environment.leftSpinnerValues;
    selectedAccommodationAdd: AccommodationAdd;
    apartmentNames: Aparment[];

    constructor(private simpleSearchService: SimpleSearchService,
        private facebookService: FacebookService,
        private sharedDataservice: SharedDataService) {

    }
    ngOnInit() {
        // this.facebookService.getLoginStatus().then(
        //     function (response) {
        //         if (response.status === 'connected') {
        //             this.leftSpinnerClick(environment.leftSpinnerValues[0].code);
        //         } else {
        //             //  $state.go('leftNav.Login');
        //         }
        //     });
    }


    getSimpleSearchAdds(leftSpinner, rightSpinner) {

        this.sharedDataservice.getAccommomdationSearchFilters()
        .subscribe(filter=>{})

        rightSpinner = encodeURIComponent(rightSpinner);
        this.simpleSearchService.getSimpleSearchAdds();
    }

    makeLink() {
        var copyFrom = document.createElement("textarea");
        //  copyFrom.textContent = $scope.link;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');
        body.removeChild(copyFrom);
        //  Materialize.toast('Copied to clipboard', 4000);
    }
}