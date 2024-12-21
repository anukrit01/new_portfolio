import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  typedStrings = [
    'Digital Specialist Engineer',
    'Full Stack Developer',
    'MEAN Stack Developer'
  ];
}