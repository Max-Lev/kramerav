import { Component, Input } from '@angular/core';
import { IMonitor } from '../../models/monitor.model';

@Component({
  selector: 'app-edid',
  templateUrl: './edid.component.html',
  styleUrls: ['./edid.component.scss']
})
export class EdidComponent {

  @Input() monitor:IMonitor;

}
