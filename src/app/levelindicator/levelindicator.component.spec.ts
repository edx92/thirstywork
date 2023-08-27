import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelIndicatorComponent } from './levelindicator.component';

describe('LevelIndicatorComponent', () => {
  let component: LevelIndicatorComponent;
  let fixture: ComponentFixture<LevelIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelIndicatorComponent]
    });
    fixture = TestBed.createComponent(LevelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
