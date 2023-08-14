import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMonitor } from '../../models/monitor.model';

@Component({
  selector: 'app-edid',
  templateUrl: './edid.component.html',
  styleUrls: ['./edid.component.scss']
})
export class EdidComponent {

  @Output() selectEmitter:EventEmitter<IMonitor> = new EventEmitter();

  @Input() monitor:IMonitor;

  selected(monitor:IMonitor){
    this.selectEmitter.emit(monitor)
  }

}
