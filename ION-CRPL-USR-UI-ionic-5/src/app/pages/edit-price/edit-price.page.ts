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

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.page.html',
  styleUrls: ['./edit-price.page.scss'],
})
export class EditPricePage implements OnInit {

  public header = 'Why not give our price a try?';
  public description = 'Driver\'s who use our suggested price get reservations faster. Try it and see the difference!';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  gotoeditAmount() {
    this.route.navigate(['edit-price-list']);
  }
}
