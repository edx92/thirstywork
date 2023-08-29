import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';
import { PlantcardsComponent } from './plantcards/plantcards.component';
const routes: Routes = [
  {
    path: '', 
    component: PlantcardsComponent
  },
  {
    path: 'plant-profile/:plantName', 
    component: PlantdetailComponent
  },
  //TODO: implement 404/not found
  // {
  //   path: '**', 
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
