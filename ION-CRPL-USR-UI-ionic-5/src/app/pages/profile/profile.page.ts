/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileInfo: any;
  public segmentButton: any;
  public profileInfoDetails: any;
  tab = '';
  constructor(public dataService: DataService, public route: Router) {
    this.profileInfo = this.dataService.userProfileData;
    this.profileInfoDetails = environment.PROFILE_DETAILS;
    this.tab = 'details';
    this.segmentButton = 'details';
  }
  changeSegmentValue(ev: any) {
    this.segmentButton = ev.detail.value;

  }
  ngOnInit() {
  }
  goForProfileEdit(link: any) {
    if (link === 'Write My Mini Biography') {
      this.route.navigate(['edit-profile']);
    } else if (link === 'Add a Car') {
      this.route.navigate(['add-car']);
    } else if (link === 'Verify My ID') {
      this.route.navigate(['verify-id']);
    }
  }
  goForPreferences(link: any) {
    if (link === 'Add My Preferences') {
      this.route.navigate(['preferences']);
    } else if (link === 'Verify +91 123 325 452') {
      this.route.navigate(['verify-phone']);
    }
  }
  goForEmailVerification(link: any) {
    if (link === 'Verify My Email') {
      this.route.navigate(['verify-email']);
    }
  }

}
