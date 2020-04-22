import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCustomersComponent } from './registration-customers.component';

describe('RegistrationCustomersComponent', () => {
  let component: RegistrationCustomersComponent;
  let fixture: ComponentFixture<RegistrationCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
