import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tailwind bind by string interpolation';

  // now i continue to property binding
  inputValue = 'please enter your name';

  imgUrl =
    'https://i.pinimg.com/736x/9e/2a/2f/9e2a2ffeb79cc6be3582a2413f7066d4.jpg';
}
