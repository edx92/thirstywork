import { Component } from '@angular/core';
import { faSeedling, faPuzzlePiece, faUserGear,faDroplet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  icons = {
    faSeedling:faSeedling,
    faPuzzlePiece:faPuzzlePiece,
    faUserGear:faUserGear,
    faDroplet:faDroplet
  }
  
}
