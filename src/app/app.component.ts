import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from './shared/data/shared.data.service';
import { environment } from '../environments/environment';
import { UserService } from './shared/userServices/user.service';
import { Observable } from 'rxjs/Observable';
import { University } from 'app/universities/universities.model';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import { Observer } from 'rxjs/Observer';
import { UserInfo } from 'app/shared/models/user.info.model';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSideNav: boolean;

  constructor(private router: Router,
    private sharedDataService: SharedDataService,
    private userService: UserService,
    private fb: FacebookService
  ) {
  }
  ngOnInit() {

    if (!this.getUserUniversitiesFromLocalStorage()) {
      this.userService.getLoginStatus()
        .filter(resp => resp)
        .switchMap(resp => this.userService.getUserUniversities()).
        subscribe(resp => this.processDbUnivChips(resp));

    }

    this.userService.getLoginStatus()
      .filter(resp => resp)
      .switchMap(resp => this.userService.getUserInfoFromFb()).
      subscribe((userInfo: UserInfo) => this.sharedDataService.emitUserInfo(userInfo));

  }

  processDbUnivChips(chips: University[]) {

    if (chips != null && chips.length > 0) {
      this.sharedDataService.setUserSelectedUniversitiesList(chips);
      localStorage.setItem(environment.userSelectedUnivs,
        JSON.stringify(chips));
      this.sharedDataService.emitDbUnivChips(chips);
    }
  }


  getUserUniversitiesFromLocalStorage(): boolean {

    if (localStorage.getItem(environment.userSelectedUnivs) != null) {
      this.sharedDataService.setUserSelectedUniversitiesList(
        JSON.parse(localStorage.getItem(environment.userSelectedUnivs)));
      return true;
    }
    else
      return false;
  }
}
