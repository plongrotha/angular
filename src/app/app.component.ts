import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { HeaderComponent } from './components/header/header.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UserComponent,
    DirectiveComponent,
    HeaderComponent,
    NgForComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'plong rotha';
}
