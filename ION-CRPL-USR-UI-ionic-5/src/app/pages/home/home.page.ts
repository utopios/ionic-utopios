/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public segmentValue: any;
  public pick: any;
  public pickSub: any;
  public des: any;
  public desSub: any;
  public rideData: any;
  public journeyDate: any;
  public journeyTime: any;
  public seatsAvailable: any;
  public rating = 4;
  public starsCount: number;
  public data = [];
  // public routerSubscription: any = null;
  public tab = '';
  constructor(
    public dataService: DataService,
    private router: Router) {
    this.data = environment.CARDS;
    this.tab = 'current';
    this.segmentValue = 'current';
  }
  ionViewWillEnter() {
    console.log(this.dataService.offeredRides);
  }


  ngOnInit() {
    console.log(this.dataService.offeredRides);
  }
  ionViewDidEnter() {
  }

  changeSegmentValue(event: any) {
    this.segmentValue = event.detail.value;
  }
  goToOfferRide() {
    this.dataService.rideType = 'offer';
    this.router.navigate(['/pickup']);
  }
  goToEditRide(ride) {
    this.dataService.selectedJourneyForEdit = ride;
    this.router.navigate(['edit-ride']);
  }
  dismiss() {
    this.router.navigate(['/tabs/home']);
  }
  goToFindRide() {
    this.dataService.rideType = 'find';
    this.router.navigate(['/find-ride']);
  }

  ngOnDestroy() {
    // this.routerSubscription.unsubscribe();
  }
}
