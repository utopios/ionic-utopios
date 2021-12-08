/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router) { }
  public data = environment.CAR_DATA;

  ngOnInit() {
  }

  openpageTRansition() {
    this.route.navigate(['add-new-vehicle']);
  }

}
