import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from './app.module';



describe('AppComponent', () => {


  let fixture: ComponentFixture<AppComponent>;


  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule,
          AppModule],
        declarations: [AppComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      //component = fixture.componentInstance;

      
    }
  );


  it('should create the app', () => {
    
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
   
  });

  it('should set loading to false after 4 second wait',()=>{
    
    const component = fixture.componentInstance;

    expect(component.loading).toBeTrue();
    jasmine.clock().install();
    component.initLoader(4000);
    jasmine.clock().tick(4000);
    expect(component.loading).toBeFalse();
    jasmine.clock().uninstall();
    

  });

  it('should render the loader',()=>{
    
    //const component = fixture.componentInstance;

    const loader = fixture.debugElement.query(By.css('[data-test-id="loader"]'));
    expect(loader).toBeTruthy()
    

  });


  
});
