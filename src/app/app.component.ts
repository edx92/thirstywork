import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  title = 'thirsty-work';
  loading = true;


  

  initLoader = () => {
    setTimeout(()=>{
      this.loading = false;
    },4000)
  }

  

  ngOnInit(){

    this.initLoader();

    

  }
}
