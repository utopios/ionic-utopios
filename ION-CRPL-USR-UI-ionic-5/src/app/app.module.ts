/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareableModule } from './components/shareable/shareable.module';
import { StopOverLocationPageModule } from '@app/pages/stop-over-location/stop-over-location.module';
import { PickupPageModule } from '@app/pages/pickup/pickup.module';
import { DropOffPageModule } from '@app/pages/drop-off/drop-off.module';
import { CalendarPageModule } from '@app/pages/calendar/calendar.module';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { environment } from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    ShareableModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
      language: 'en',
    }),
    TabsPageModule,
    PickupPageModule,
    DropOffPageModule,
    CalendarPageModule,
    StopOverLocationPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
