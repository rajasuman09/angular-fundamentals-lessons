import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: ` <h1>User Listing</h1> 
  @for (item of userData; track $index) {
    <app-user-info [user]="item"/>
  }
  `,
})
export class AppComponent {
  constructor() {
    this.userService.getUserData().then(data => {
      this.userData = data;
    })
  }
  userService = inject(UserService);
  userData: User[] = [];
}
