import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap} from 'rxjs';
import { PlantService, Plant } from '../plant.service';
import { faDroplet, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styleUrls: ['./plantdetail.component.scss']
})
export class PlantdetailComponent implements OnInit {

  icons = {
    faDroplet: faDroplet,
    faTrashCan: faTrashCan
  }

  plantName = "";
  plantSub: Subscription = Subscription.EMPTY;
  //public plants$?: Observable<Plant[]>;

  plant: Plant|undefined = undefined;

  
  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ){ }


  public plant$ =this.route.paramMap.pipe(
    switchMap((params) => 
    this.plantService.getPlantByName((params.get("plantName") ?? "").replaceAll("_"," "))
    )
  );

  public calculateWaterLevel = this.plantService.calculateWaterLevel;
  public getLastWateredDays = this.plantService.getLastWateredDays;
  
  
  ngOnInit(){
   if(!this.plantService.plantsSubActive()){
      console.log("plants sub not active")
      this.plantService.init();
    }

    
    
    
  }

  ngOnDestroy() {
    //if (this.paramSub) this.paramSub.unsubscribe();
    //if (this.plantSub) this.plantSub.unsubscribe();
    //if (this.plantService) this.plantService.destroy();
  }
}
