import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'plong rotha';

  str: string[] = ['hello', 'name', 'so'];

  sayHello(): string {
    this.str.map((text) => {
      console.log(text.toUpperCase());
    });
    return this.name;
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
