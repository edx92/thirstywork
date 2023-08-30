import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject} from 'rxjs';
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
  //private plant$ = new Subject<Plant>;
  

  constructor(private http: HttpClient) { }

  public init(): void {
    this.http
    .get<Plant[]>('/assets/dummyData/plants.json')
    .subscribe((plants:Plant[])=> {
      this.plants$.next(plants);
    })
  }

  public getPlants(): Observable<Plant[]>{
    return this.plants$;
  }

  // ToDo: Implement get single plant api
  // public initPlant(plantName:string){
   
  //   return this.plants$;
    
  // }

  // public getPlant(){
  //   return this.plant$;
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
