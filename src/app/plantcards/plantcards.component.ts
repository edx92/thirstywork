import { Component, OnInit } from '@angular/core';
import {PlantService, Plant} from '../plant.service';
import { Observable } from 'rxjs';
import { faDroplet, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-plantcards',
  templateUrl: './plantcards.component.html',
  styleUrls: ['./plantcards.component.scss'],
})
export class PlantcardsComponent implements OnInit {

  icons = {
    faDroplet: faDroplet,
    faTrashCan: faTrashCan
  }
  
  public plants$?: Observable<Plant[]>;

  // inject the service in the constructor
  constructor(private plantService: PlantService){}

  ngOnInit() {
    this.plants$ = this.plantService.getPlants();

    this.plantService.init();
  }

  
}
