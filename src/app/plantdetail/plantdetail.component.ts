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

  constructor(private route: ActivatedRoute,private plantService: PlantService){

  }

  
  ngOnInit(){
    this.paramSub = this.route.paramMap.subscribe((params) => {
      //console.log(params.get("plantName"))
      this.plantName = params.get("plantName") ?? "Unknown";
    });
   
    // TODO: temporarily just mapping the correct plant => should be subscribing to another endpoint that returns plant by name/id
    this.plants$ = this.plantService.getPlants().pipe(map(plants => plants.filter(p => p.name == this.plantName.replaceAll("_"," "))));

    this.plantService.init();


    
    
  }

  ngOnDestroy() {
    if (this.paramSub) this.paramSub.unsubscribe();
    if (this.plantService) this.plantService.destroy();
  }
}
