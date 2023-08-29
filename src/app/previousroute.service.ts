import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import {filter, pairwise, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousrouteService {

 private previousUrl = new BehaviorSubject<string|undefined>(undefined);

 constructor(private router: Router) {}

  public init():void {
    this.router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      //this.previousUrl = events[0].urlAfterRedirects;
      this.previousUrl.next(events[0].urlAfterRedirects);
      //console.log('previous url', this.previousUrl);
    });
  }
  
  
  public getPreviousUrl() {
    return this.previousUrl;
  }
 } 