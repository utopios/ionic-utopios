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
  selector: 'app-signup-with-email',
  templateUrl: './signup-with-email.page.html',
  styleUrls: ['./signup-with-email.page.scss'],
})
export class SignupWithEmailPage implements OnInit {

  public email: string;
  public password: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  register() {
    this.route.navigate(['/tabs/home']);

  }
  login() {
    this.route.navigate(['login-form']);

  }

}
