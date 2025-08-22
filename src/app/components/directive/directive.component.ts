import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isChecked: boolean = false;
  isInput: boolean = false;

  onClick() {
    this.isChecked = !this.isChecked;
    console.log('clicked');
  }
  onSumit() {
    alert('you sumited.');
  }

  showContent() {
    this.isInput = true;
  }

  hideContent() {
    this.isInput = false;
  }
}
