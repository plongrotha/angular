import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBindComponent } from './components/event-bind/event-bind.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'plong rotha';

  urlImage =
    'https://unsplash.com/photos/sunset-shines-through-the-manhattan-bridge-gPaakkcpSFI';

  str: string[] = ['hello', 'name', 'so'];

  sayHello(): string {
    this.str.map((text) => {
      console.log(text.toUpperCase());
    });
    return this.name;
  }
}
