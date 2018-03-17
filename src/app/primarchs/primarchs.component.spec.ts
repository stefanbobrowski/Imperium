import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarchsComponent } from './primarchs.component';

describe('PrimarchsComponent', () => {
  let component: PrimarchsComponent;
  let fixture: ComponentFixture<PrimarchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
