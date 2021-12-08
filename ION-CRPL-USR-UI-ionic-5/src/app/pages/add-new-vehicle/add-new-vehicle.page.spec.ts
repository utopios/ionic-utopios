/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewVehiclePage } from './add-new-vehicle.page';

describe('AddNewVehiclePage', () => {
  let component: AddNewVehiclePage;
  let fixture: ComponentFixture<AddNewVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewVehiclePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
