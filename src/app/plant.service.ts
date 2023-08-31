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
  //private plant$ = new BehaviorSubject<Plant|undefined>(undefined);
  //private plant: Plant|undefined = undefined;
  //private plantSub: Subscription = Subscription.EMPTY;
  private plantsSub: Subscription = Subscription.EMPTY;

  constructor(private http: HttpClient) { }

  public init(): void {
    this.plantsSub = this.http
    .get<Plant[]>('/assets/dummyData/plants.json')
    .subscribe((plants:Plant[])=> {
      this.plants$.next(plants);
    })
  }
  // public initForSinglePlant(plantName:string): void {
  //   this.plantsSub = this.http
  //   .get<Plant[]>('/assets/dummyData/plants.json')
  //   .subscribe((plants:Plant[])=> {
  //     this.plants$.next(plants);
  //     this.loadPlantByName(plantName);
  //     console.log("init complete")
  //   })
  // }

  public getPlants(): Observable<Plant[]>{
    return this.plants$;
  }

  public getPlantByName(plantName:string){
    return this.getPlants().pipe(
      filter((plants) => plants.length > 0), // dont emit if no plants loaded yet
      map((plants) => plants.find((p) => p.name == plantName))// map to single value of plant with right name
    )
  }

  // public loadPlantByName(plantName:string){
  //   this.plantSub = this.getPlants().pipe(
  //     filter((plants) => plants.length > 0), // dont emit if no plants loaded yet
  //     map((plants:Plant[]) => plants.find((p) => p.name == plantName.replaceAll("_"," ")))      
  //   ).subscribe(pl => this.plant = pl)

  //   return this.plantSub;
  //   //console.log(this.plant)
  // }

  // public getPlant(){
  //   console.log("Get Plant")
  //   return this.plant;
  // }

  public plantsSubActive(){
    console.log("check plants sub")
    return this.plantsSub != Subscription.EMPTY;
  }

  // public plantSubActive(){
  //   console.log("check plant sub")
  //   return this.plantSub != Subscription.EMPTY;
  // }

 

  public destroy():void {
    this.plants$.unsubscribe();
  }

  // public getPlantsThatNeedWater(): Observable<Plant[]> {
  //   return this.plants$.pipe(
  //     map((plants) => plants.filter((plant) => plant.needsWatering))
  //   )
  // }
}

//new Date().toISOString().slice(0, 19).replace('T', ' ');
