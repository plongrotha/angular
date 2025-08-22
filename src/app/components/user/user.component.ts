import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name: string = 'hello ';
  topics: string = 'learn angular about data binding';

  onClick(): void {
    alert('user clicked');
  }

  onCountryChange(event: Event): void {
    alert((event.target as HTMLSelectElement).value);
  }
}
