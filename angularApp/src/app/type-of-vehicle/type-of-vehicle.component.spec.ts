import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfVehicleComponent } from './type-of-vehicle.component';

describe('TypeOfVehicleComponent', () => {
  let component: TypeOfVehicleComponent;
  let fixture: ComponentFixture<TypeOfVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
