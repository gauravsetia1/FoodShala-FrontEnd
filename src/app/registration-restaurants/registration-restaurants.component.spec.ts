import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRestaurantsComponent } from './registration-restaurants.component';

describe('RegistrationRestaurantsComponent', () => {
  let component: RegistrationRestaurantsComponent;
  let fixture: ComponentFixture<RegistrationRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
