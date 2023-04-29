import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {

  user: Users = {
    idUser: 0, username: '', firstName: '', lastName: '', email: '', celPhone: '',
    birthday: '', gender: '', password: '', roles: [], addresses: []
  }

  constructor(private userService: UsersService){}

  createUser(): void{
    this.userService.createUser(this.user)
      .subscribe(userCreated =>{
        console.log(userCreated);
      });
  }
}
