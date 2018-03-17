import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelDetailsComponent } from './novel-details.component';

describe('NovelDetailsComponent', () => {
  let component: NovelDetailsComponent;
  let fixture: ComponentFixture<NovelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
