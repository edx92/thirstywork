import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { faDroplet} from '@fortawesome/free-solid-svg-icons';
import {  trigger, state, style, animate, transition} from '@angular/animations';
import { PreviousrouteService } from '../previousroute.service';

@Component({
  selector: 'app-levelindicator',
  templateUrl: './levelindicator.component.html',
  styleUrls: ['./levelindicator.component.scss'],
  animations: [
    trigger('fillIndicator',[
      state('inital', style({
        strokeDasharray: "0 999"
      })),
    
      state('filled', style({
        //strokeDasharray: this.getFillIndicatorLineValue(50)+" 999"
        //strokeDasharray: "125.55 999"
        strokeDasharray: "{{percentage}} 999"
      }),{params: {percentage:'125.555'}}),
  
      transition('initial => filled', [
        animate('1s')
      ]),
      transition('filled => initial', [
        animate('0.5s')
      ])
    ])
    
  ]
})
export class LevelIndicatorComponent implements OnInit, OnChanges {

  @Input() waterLevel:number = 10;

  constructor(private previousrouteService: PreviousrouteService){
    //console.log(this.waterLevel)
  }

  title = "";
  icons = {
    faDroplet:faDroplet
  };

  getFillIndicatorLineValue = (percentage:number) => {
    //console.log("percentage:" + percentage)
 
    return  String((percentage * (2 * 40 * 3.1415926536)) / 100);
  };

  filled = false;
  percentage = this.getFillIndicatorLineValue(this.waterLevel) + " 999";

  levelColor = {
    good: true,
    medium:false,
    warning: false
  };

  prevUrl?:string = undefined;

  

  ngOnInit(){
    
    this.previousrouteService.init();
   
    this.prevUrl = this.previousrouteService.getPreviousUrl().value;
    
    //console.log(this.waterLevel)
    //console.log(this.percentage)
    
    if(this.prevUrl){
      setTimeout(()=>{
        this.filled = true;
      },500)
    } else {
      setTimeout(()=>{
        this.filled = true;
      },4000) 
    }
    
    

  }



  ngOnChanges(changes: SimpleChanges){
    //console.log(changes["waterLevel"].currentValue)
    this.waterLevel = changes["waterLevel"].currentValue;
    if(this.waterLevel < 25){      
      this.levelColor.good = false;
      this.levelColor.medium = true;
      this.levelColor.warning = false;
      //this.levelColor = this.waterLevel < 25 ? "Orange" : "#42a5f5";
    }
    if(this.waterLevel < 10){
      this.levelColor.good = false;
      this.levelColor.medium = false;
      this.levelColor.warning = true;
    }
    //console.log("water level after change " +changes["waterLevel"].currentValue);
    this.percentage = this.getFillIndicatorLineValue(changes["waterLevel"].currentValue) + " 999";
  }

  

}
