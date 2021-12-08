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
  selector: 'app-book-instantly',
  templateUrl: './book-instantly.page.html',
  styleUrls: ['./book-instantly.page.scss'],
})
export class BookInstantlyPage implements OnInit {

  public book = 'Can passengers book instantly?';
  constructor(private route: Router, public dataService: DataService) { }

  ngOnInit() {
  }
  gotoPrice(status) {
    this.dataService.rideDirection === 'onward' ?
      this.dataService.onwardRideDetails.instantBook = status :
      this.dataService.returnRideDetails.instantBook = status;
    this.route.navigate(['recommended-price']);

  }

}
