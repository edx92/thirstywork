import { Component} from '@angular/core';
import { faDroplet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-droploader',
  templateUrl: './droploader.component.html',
  styleUrls: ['./droploader.component.scss']
})
export class DroploaderComponent {

  title = 'ThirstyWork';
  intro = 'The Tracker that helps you keep your houseplants alive';
  icons = {
    faDroplet:faDroplet
  }

  
}
