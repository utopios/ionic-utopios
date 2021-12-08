import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingLicensePageRoutingModule } from './driving-license-routing.module';

import { DrivingLicensePage } from './driving-license.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingLicensePageRoutingModule
  ],
  declarations: [DrivingLicensePage]
})
export class DrivingLicensePageModule {}
