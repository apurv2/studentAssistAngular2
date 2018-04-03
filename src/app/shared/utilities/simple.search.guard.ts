import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RecentlyViewedService } from '../../accommodation/recentlyViewed/accommodation.recently.viewed.service';
import { SimpleSearch } from '../../accommodation/simpleSearch/accommodation.simple.search';

@Injectable()
export class SimpleSearchGuard implements CanDeactivate<SimpleSearch> {

    canDeactivate(component: SimpleSearch) {

        if (window.innerWidth < 767) {
            if (component.simpleSearchList.showingDetails) {
                component.simpleSearchList.showingDetails = false;
                return false;
            }
            return true;
        }
        return true;
    }

}