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

  private _counter: number = 0;

  add(): void {
    console.log('hello');
  }

  set(value: number) {
    this._counter = value || 0;

    if (value > 25) {
      this._counter = value % 25;
    }
  }

  increase() {
    this._counter++;
  }
}
