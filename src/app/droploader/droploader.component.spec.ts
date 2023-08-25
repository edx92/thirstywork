import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroploaderComponent } from './droploader.component';

describe('DroploaderComponent', () => {
  let component: DroploaderComponent;
  let fixture: ComponentFixture<DroploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroploaderComponent]
    });
    fixture = TestBed.createComponent(DroploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
