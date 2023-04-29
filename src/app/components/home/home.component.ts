import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  user: Users = {
    idUser: 0, username: '', firstName: '', lastName: '', email: '', celPhone: '',
    birthday: '', gender: '', password: '', roles: [], addresses: []
  }

  constructor(private userService: UsersService){}

  getAllUsers(): void{
    this.userService.getAllUsers()
      .subscribe(usersGetted=>{
        console.log(usersGetted);
      });
  }

  createUser(): void{
    this.userService.createUser(this.user)
      .subscribe(userCreated =>{
        console.log(userCreated);
      });
  }

  getUser(id: number): void{
    this.userService.getUser(id)
      .subscribe(userGetted => {
        console.log(userGetted);
      });
  }

  updateUser(id: number): void{
    this.userService.deleteUser(id)
      .subscribe(()=>{
        console.log('usuario eliminado')
      });
  }

}
