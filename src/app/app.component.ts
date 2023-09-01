import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  title = 'thirsty-work';
  loading = true;


  

  initLoader = (miliseconds:number) => {
    setTimeout(()=>{
      this.loading = false;
    },miliseconds)
  }

  

  ngOnInit(){

    this.initLoader(4000);

    

  }
}
