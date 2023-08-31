import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, map, filter} from 'rxjs';
import { PlantService, Plant } from '../plant.service';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styleUrls: ['./plantdetail.component.scss']
})
export class PlantdetailComponent implements OnInit {

  plantName = "";
  paramSub: Subscription = Subscription.EMPTY;
  plantSub: Subscription = Subscription.EMPTY;
  public plants$?: Observable<Plant[]>;

  plant: Plant|undefined = undefined;

  constructor(private route: ActivatedRoute,private plantService: PlantService){

  }

  
  ngOnInit(){
    this.paramSub = this.route.paramMap.subscribe((params) => {
      //console.log(params.get("plantName"))
      this.plantName = params.get("plantName") ?? "Unknown";
    });
   
    // TODO: temporarily just mapping the correct plant => should be subscribing to another endpoint that returns plant by name/id
    //this.plants$ = this.plantService.getPlants().pipe(map(plants => plants.filter(p => p.name == this.plantName.replaceAll("_"," "))));

    this.plantSub = this.plantService.getPlantByName(this.plantName.replaceAll("_"," ")).subscribe(plant => this.plant = plant);
    
    //this.plantSub = this.plantService.loadPlantByName(this.plantName);
    //this.plantService.init();
    if(!this.plantService.plantsSubActive()){
      console.log("plants sub not active")
      this.plantService.init();
      //this.plantService.initForSinglePlant(this.plantName);
    }
    //this.plantService.loadPlantByName(this.plantName);
    
    
    //this.plant = this.plantService.getPlant();
    


    
    
  }

  ngOnDestroy() {
    if (this.paramSub) this.paramSub.unsubscribe();
    if (this.plantSub) this.plantSub.unsubscribe();
    //if (this.plantService) this.plantService.destroy();
  }
}
