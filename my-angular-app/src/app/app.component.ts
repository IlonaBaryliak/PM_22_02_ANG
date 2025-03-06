import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadComponent, HorizontalComponent], // Додаємо компонент
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';
  picture: string = '/assets/image/photo.png';
}
