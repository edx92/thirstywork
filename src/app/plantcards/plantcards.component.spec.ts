import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { PlantcardsComponent } from './plantcards.component';


describe('PlantcardsComponent', () => {
    let fixture: ComponentFixture<PlantcardsComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
                AppModule
      ],
      declarations: [PlantcardsComponent]
    });
    fixture = TestBed.createComponent(PlantcardsComponent);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    let component = fixture.componentInstance
    expect(component).toBeTruthy();
  });

  
});

