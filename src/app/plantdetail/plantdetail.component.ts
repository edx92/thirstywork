import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plantdetail',
  templateUrl: './plantdetail.component.html',
  styleUrls: ['./plantdetail.component.scss']
})
export class PlantdetailComponent implements OnInit {

  plantName = "";
  paramSub: Subscription = Subscription.EMPTY;

  constructor(private route: ActivatedRoute){

  }

  
  ngOnInit(){
    this.paramSub = this.route.paramMap.subscribe((params) => {
      console.log(params.get("plantName"))
      this.plantName = params.get("plantName") ?? "Unknown";
    });
  }

  ngOnDestroy() {
    if (this.paramSub) this.paramSub.unsubscribe();
  }
}
