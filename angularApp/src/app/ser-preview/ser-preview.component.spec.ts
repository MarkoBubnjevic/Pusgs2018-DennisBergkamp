import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerPreviewComponent } from './ser-preview.component';

describe('SerPreviewComponent', () => {
  let component: SerPreviewComponent;
  let fixture: ComponentFixture<SerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
