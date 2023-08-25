import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  needsWatering:boolean;

}

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private plants$ = new BehaviorSubject<Plant[]>([]);

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

  public getPlantsThatNeedWater(): Observable<Plant[]> {
    return this.plants$.pipe(
      map((plants) => plants.filter((plant) => plant.needsWatering))
    )
  }
}

//new Date().toISOString().slice(0, 19).replace('T', ' ');
