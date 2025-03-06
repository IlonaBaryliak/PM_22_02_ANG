import { Component } from '@angular/core';

@Component({
  selector: 'app-head', // Ім'я компонента, яке ми будемо використовувати в шаблоні
  templateUrl: './head.component.html', // Шаблон компонента
// styleUrls: ['./head.component.scss'], // Стилі компонента (не обов'язково, якщо не використовуються)
})
export class HeadComponent {
    picture: string = '/assets/image/photo.png';
    
  // Тут можна додавати логіку компонента, якщо потрібно
}
