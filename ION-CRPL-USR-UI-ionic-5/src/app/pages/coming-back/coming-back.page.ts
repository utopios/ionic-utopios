/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-coming-back',
  templateUrl: './coming-back.page.html',
  styleUrls: ['./coming-back.page.scss'],
})
export class ComingBackPage implements OnInit {
  public comingBack = 'Coming back as well? Publish your return trip now!';
  public subheader = 'Just tell us when you\'re going back';
  public confirmImage = 'assets/image/a.jpg';
  constructor(private route: Router, public dataService: DataService) { }
  ngOnInit() {
  }
  goForReturnRide() {
    this.dataService.rideDirection = 'return';
    this.route.navigate(['calendar', { value: 'returnTrip' }]);
  }
  goForThanks() {
    this.route.navigate(['add-return-description']);
  }

}
