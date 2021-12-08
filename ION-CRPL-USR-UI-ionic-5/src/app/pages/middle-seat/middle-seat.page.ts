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
  selector: 'app-middle-seat',
  templateUrl: './middle-seat.page.html',
  styleUrls: ['./middle-seat.page.scss'],
})
export class MiddleSeatPage implements OnInit {

  public middle = 'Think comfort, keep the middle seat empty';
  constructor(private route: Router, public dataService: DataService,
  ) { }

  ngOnInit() {
  }
  gotoSelectSeats(status) {
    this.dataService.rideDirection === 'onward' ?
      this.dataService.onwardRideDetails.middleSeat = status :
      this.dataService.returnRideDetails.middleSeat = status;
    this.route.navigate(['total-passengers', { value: 'direct' }]);
  }

}
