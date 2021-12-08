import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCarPage } from './add-car.page';

describe('AddCarPage', () => {
  let component: AddCarPage;
  let fixture: ComponentFixture<AddCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
