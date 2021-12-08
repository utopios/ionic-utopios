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
import { LocationService } from '@app/services/location.service';
@Component({
  selector: 'app-recommended-price',
  templateUrl: './recommended-price.page.html',
  styleUrls: ['./recommended-price.page.scss'],
})
export class RecommendedPricePage implements OnInit {

  public headerText = 'This is our recommended price per seat. Is it OK for you?';
  public pickup: any;
  public destination: any;
  constructor(public dataService: DataService,
              private route: Router,
              public locationService: LocationService) {
  }

  ngOnInit() {
  }
  askForReturn() {
    console.log(this.dataService.rideDirection);
    this.dataService.rideDirection === 'onward' ?
      this.route.navigate(['coming-back']) :
      this.route.navigate(['add-return-description']);
  }
  notAgree() {
    this.route.navigate(['edit-price']);
  }

}
