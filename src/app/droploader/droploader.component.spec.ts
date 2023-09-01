import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DroploaderComponent } from './droploader.component';
import { AppModule } from '../app.module';

describe('DroploaderComponent', () => {
  
  let fixture: ComponentFixture<DroploaderComponent>;

    beforeEach(() => {
            TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                AppModule],
            declarations: [DroploaderComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(DroploaderComponent);
            fixture.detectChanges();
            //component = fixture.componentInstance;

            
        }
    );

  
    it('should create the component', () => {
    
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    
    });

  
});
