import { Component } from '@angular/core';
import { faDroplet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-levelindicator',
  templateUrl: './levelindicator.component.html',
  styleUrls: ['./levelindicator.component.scss']
})
export class LevelIndicatorComponent {
  title = "";
  icons = {
    faDroplet:faDroplet
  }

}
