import { Component, Input } from '@angular/core';
import { RoutesForVehicle } from 'src/app/types/types';

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.scss'],
})
export class RouteListItemComponent {
  @Input() item: RoutesForVehicle;

  constructor() { }

}
