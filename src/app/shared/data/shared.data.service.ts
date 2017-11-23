import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class SharedDataService {

    showHomepageBackground = new Subject<boolean>();

    getHomePageBackground() {
        return this.showHomepageBackground;
    }

    setHomePageBackground(status: boolean) {
        this.showHomepageBackground.next(status);
    }
}