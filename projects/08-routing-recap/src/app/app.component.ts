import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <h1>Welcome to {{ title }}!</h1>
  @for (item of productTitles; track $index) {
    <p>
      <a [routerLink]="['details', $index]">
        {{item}}
      </a>
    </p>
  } 
  <router-outlet/>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
