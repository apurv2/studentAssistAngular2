import { Component, Input } from "@angular/core";
import { AccommodationAdd } from "../../accommodation/shared/models/accommodation.model";
import { UserService } from "../../shared/userServices/user.service";
import { RecentlyViewedService } from "./accommodation.recently.viewed.service";


@Component({
    selector: 'accommodation-recently-viewed',
    templateUrl: 'accommodation.recently.viewed.html'
})

export class RecentlyViewedAccommodations {

    accommodationAdds: AccommodationAdd[];
    paginationCount: number = 0;
    noData: boolean = false;

    constructor(private recentlyViewedService: RecentlyViewedService,
        private userService: UserService) { }
    ngOnInit() {
        this.paginationCount = 0;
        this.getRecentlyViewedAdds();

    }

    getRecentlyViewedAdds() {
        this.userService.getLoginStatus()
            .filter(resp => resp)
            .switchMap(resp => this.recentlyViewedService.getRecentlyViewedAdds(this.paginationCount))
            .subscribe(adds => {
                this.accommodationAdds = adds
                this.noData = this.accommodationAdds != null && this.accommodationAdds.length > 0 ? false : true;
            });
    }

    getNextSetOfRecentlyViewed() {
        this.paginationCount++;
        this.getRecentlyViewedAdds();
    }

}