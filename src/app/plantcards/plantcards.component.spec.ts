import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantcardsComponent } from './plantcards.component';

describe('PlantcardsComponent', () => {
  let component: PlantcardsComponent;
  let fixture: ComponentFixture<PlantcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantcardsComponent]
    });
    fixture = TestBed.createComponent(PlantcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
