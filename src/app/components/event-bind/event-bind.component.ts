import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  imports: [],
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css'],
})
export class EventBindComponent {
  clickHere(event: MouseEvent) {
    alert('user clicked the button');
  }
}
