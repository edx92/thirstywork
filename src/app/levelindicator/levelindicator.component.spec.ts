// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LevelIndicatorComponent } from './levelindicator.component';

// describe('LevelIndicatorComponent', () => {
//   let component: LevelIndicatorComponent;
//   let fixture: ComponentFixture<LevelIndicatorComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LevelIndicatorComponent]
//     });
//     fixture = TestBed.createComponent(LevelIndicatorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LevelIndicatorComponent } from './levelindicator.component';
import { AppModule } from '../app.module';

import { PlantService } from '../plant.service';

describe('DroploaderComponent', () => {
  
  let fixture: ComponentFixture<LevelIndicatorComponent>;

    beforeEach(() => {
            TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                AppModule],
            declarations: [LevelIndicatorComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(LevelIndicatorComponent);
            fixture.detectChanges();
            //component = fixture.componentInstance;

            
        }
    );

  
    it('should create the component', () => {
    
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    
    });

    it('calculate indicator level at 50% with last watered set to 5 days ago and water schedule at 10 days', () => {
    
        let calculateWaterLevel = PlantService.prototype.calculateWaterLevel;

        let today = new Date();
        let lastWatered = new Date(today);
        lastWatered.setDate(today.getDate() - 5);

        let waterLevel = calculateWaterLevel(lastWatered.toISOString().slice(0, 19).replace('T', ' '),10);

        expect(waterLevel).toBe(50);
    
    });

  
});

