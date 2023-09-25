import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `
    <app-card></app-card>
    <h1>Aula de Services</h1>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-angular';
}
