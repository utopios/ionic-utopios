/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '@env/environment';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  constructor(
    private platform: Platform,
    private util: UtilService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (environment.GOOGLE_MAPS_API_KEY && environment.GOOGLE_MAPS_API_KEY === 'AIzaSyDCAOW_hm9D-oaH12_Zoo2is_lM2xVifh4') {
        this.showAPIKeyAlert();
      }
    });
  }

  async showAPIKeyAlert() {

    const cancelAlert = await this.util.createAlert(
      'Wait!',
      false,
      'You have not entered your Maps API key in environment. Make sure you enter the API key in both debug and prod environment and index.html. Read more in the documentation or README.md of source code.',
      {
        text: 'Ok',
        role: 'cancel',
        cssClass: 'secondary',
        handler: async () => {
        }
      }
    );
    await cancelAlert.present();
  }
}
