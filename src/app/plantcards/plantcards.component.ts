import { Component, OnInit } from '@angular/core';
import {PlantService, Plant} from '../plant.service';
import { Observable} from 'rxjs';
import { faDroplet, faTrashCan } from '@fortawesome/free-solid-svg-icons';


// TODO: introduce isGrowingSeason Check

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

  getLastWateredDays = (lastWatered:string) => {
    // One day Time in ms (milliseconds)
    const one_day = 1000 * 60 * 60 * 24;
    let today = new Date();

    let diff = Math.round((Math.round(today.getTime() - new Date(lastWatered).getTime()) / one_day));

    return diff;
  }
  

  calculateWaterLevel = (lastWatered:string,wateringSchedule:number) => {
    // One day Time in ms (milliseconds)
    const one_day = 1000 * 60 * 60 * 24;

    //console.log(lastWatered)
    //console.log(wateringSchedule)

    let lw = new Date(lastWatered);
    let today = new Date();
    //console.log(today)
    let nw = new Date();
    // set needs watering to lastwatered plus number of days in watering schedule
    nw.setDate(lw.getDate() + wateringSchedule);

    //console.log(lw)
    //console.log(nw)

    let diff = Math.round((Math.round(nw.getTime() - today.getTime()) / one_day));
    //console.log(diff)

    return (diff / wateringSchedule) * 100;
  }

  ngOnInit() {
    this.plants$ = this.plantService.getPlants();

    this.plantService.init();
  }

  ngOnDestroy(){
    if (this.plantService) this.plantService.destroy();
  }

  
}
