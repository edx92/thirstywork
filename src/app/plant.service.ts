import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,filter,map, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import { map } from 'rxjs/operators';

export interface Plant {
  name:string;
  species:string;

  growSeasonWateringSchedule:number;
  dormantSeasonWateringSchedule:number;

  dormantSeasonStart?:Date;
  dormantSeasonEnd?:Date;

  lightConditions: string;

  variety?:string;
  genus?:string;
  family:string;

  
  image:string;

  lastWatered: string,
  room:string;


}

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private plants$ = new BehaviorSubject<Plant[]>([]);

  private plantsSub: Subscription = Subscription.EMPTY;

  constructor(private http: HttpClient) { }

  public init(): void {
    this.plantsSub = this.http
    .get<Plant[]>('/assets/dummyData/plants.json')
    .subscribe((plants:Plant[])=> {
      this.plants$.next(plants);
    })
  }
  

  public getPlants(): Observable<Plant[]>{
    console.log(this.plants$)
    return this.plants$;
  }

  public getPlantByName(plantName:string){
    return this.getPlants().pipe(
      filter((plants) => plants.length > 0), // dont emit if no plants loaded yet
      map((plants) => plants.find((p) => p.name == plantName))// map to single value of plant with right name
    )
  }

  

  public plantsSubActive(){
    console.log("check plants sub")
    return this.plantsSub != Subscription.EMPTY;
  }


 

  public destroy():void {
    this.plants$.unsubscribe();
  }


  public getLastWateredDays(lastWatered:string){
    // One day Time in ms (milliseconds)
    const one_day = 1000 * 60 * 60 * 24;
    let today = new Date();

    let diff = Math.round((Math.round(today.getTime() - new Date(lastWatered).getTime()) / one_day));

    return diff;
  }
  

  public calculateWaterLevel(lastWatered:string,wateringSchedule:number){

    
    const one_day = 1000 * 60 * 60 * 24;

    let lw = new Date(lastWatered);
    //console.log(lw)
    let today = new Date();
    
    let nw = new Date(lw);
    // set needs watering to lastwatered plus number of days in watering schedule
    nw.setDate(lw.getDate() + wateringSchedule);
  

    let diff = Math.round((Math.round(nw.getTime() - today.getTime()) / one_day));

    //console.log(diff)

    return (diff / wateringSchedule) * 100;
  }

  // public getPlantsThatNeedWater(): Observable<Plant[]> {
  //   return this.plants$.pipe(
  //     map((plants) => plants.filter((plant) => plant.needsWatering))
  //   )
  // }
}

//new Date().toISOString().slice(0, 19).replace('T', ' ');
