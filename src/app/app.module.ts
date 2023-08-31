import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroploaderComponent } from './droploader/droploader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PlantcardsComponent } from './plantcards/plantcards.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
//import { MatGridListModule } from '@angular/material/grid-list';
import { LevelIndicatorComponent } from './levelindicator/levelindicator.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';
//import { PreviousrouteService } from './previousroute.service';





@NgModule({
  declarations: [
    AppComponent,
    DroploaderComponent,
    SidebarComponent,
    PlantcardsComponent,
    LevelIndicatorComponent,
    PlantdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    //MatGridListModule,
    MatMenuModule, 
    MatIconModule,
    // RouterModule.forRoot([
    //   {
    //     path: '', 
    //     component: PlantcardsComponent
    //   },
    //   {
    //     path: 'plant-profile/:plantname', 
    //     component: PlantdetailComponent
    //   },
    //   //TODO: implement 404/not found
    //   // {
    //   //   path: '**', 
    //   //   component: NotFoundComponent
    //   // },
    // ]),
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
