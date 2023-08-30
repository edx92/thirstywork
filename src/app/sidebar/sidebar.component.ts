import { Component } from '@angular/core';
import { faSeedling, faLocationDot, faUserGear,faDroplet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  icons = {
    faSeedling:faSeedling,
    faLocationDot:faLocationDot,
    faUserGear:faUserGear,
    faDroplet:faDroplet
  }
  
}
