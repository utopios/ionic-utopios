/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-add-new-vehicle',
  templateUrl: './add-new-vehicle.page.html',
  styleUrls: ['./add-new-vehicle.page.scss'],
})
export class AddNewVehiclePage implements OnInit {

  public license = '';
  public newvehicleData = environment.NEW_VECHILE_DATA;
  private valueName: any;

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  getValue(item: any) {
    this.valueName = item;
    console.log('selected valiue name', this.valueName);
  }
  openpageTRansition() {
    this.navctrl.back();
  }


}
