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
  selector: 'app-delete-ride',
  templateUrl: './delete-ride.page.html',
  styleUrls: ['./delete-ride.page.scss'],
})
export class DeleteRidePage implements OnInit {

  public deleteRide: Array<any>;
  customPopoverOptions: any = {
  };
  constructor(private dataService: DataService,
              private route: Router) {
    this.deleteRide = environment.DELETE_RIDE;
  }

  ngOnInit() {
  }
  deleteData() {
    // this.service.cardDetails = false;
    const index = this.dataService.offeredRides.findIndex(ride => ride.id === this.dataService.selectedJourneyForEdit.id);
    this.dataService.offeredRides.splice(index, 1);
    this.dataService.selectedJourneyForEdit = {};
    this.route.navigate(['/tabs/home']);
  }
}
