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
import { environment } from '@env/environment';
@Component({
  selector: 'app-verify-id',
  templateUrl: './verify-id.page.html',
  styleUrls: ['./verify-id.page.scss'],
})
export class VerifyIdPage implements OnInit {

  public documents = environment.DOCUMENTS;
  constructor(public route: Router) { }

  ngOnInit() {
  }
  gotoPage(item: any) {
    this.route.navigate([item]);

  }

}
