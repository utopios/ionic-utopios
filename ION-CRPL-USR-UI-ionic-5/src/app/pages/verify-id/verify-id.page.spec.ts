import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyIdPage } from './verify-id.page';

describe('VerifyIdPage', () => {
  let component: VerifyIdPage;
  let fixture: ComponentFixture<VerifyIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
