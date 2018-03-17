import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarchDetailsComponent } from './primarch-details.component';

describe('PrimarchDetailsComponent', () => {
  let component: PrimarchDetailsComponent;
  let fixture: ComponentFixture<PrimarchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
