import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBindComponent } from './components/event-bind/event-bind.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBindComponent, StringInterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'plong rotha';
}
