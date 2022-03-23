import { User } from './../models/user/user.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listusers: User[] = [
   {id:1 , TypeUser:"admin" , nom:"wadhah", prenom:"daoud",telephone:52454782, email:"wadhah@gmail.com", loginNumber:123456, password:121212},
   {id:1 , TypeUser:"admin" , nom:"wadhah", prenom:"daoud",telephone:52454782, email:"wadhah@gmail.com", loginNumber:123456, password:121212},
   {id:1 , TypeUser:"admin" , nom:"wadhah", prenom:"daoud",telephone:52454782, email:"wadhah@gmail.com", loginNumber:123456, password:121212},
   {id:1 , TypeUser:"admin" , nom:"wadhah", prenom:"daoud",telephone:52454782, email:"wadhah@gmail.com", loginNumber:123456, password:121212},
   ];

  constructor() { }
  getUser(){
    return this.listusers.slice();
  }

  getSingleUser(id: number){
    const User = this.listusers.find(
      (userObject) => {
          return userObject.id===id;
      }
  );

   return User ;
  }

  removeUsers(index:number){
    this.listusers.splice(index, 1);

  }

  addUser(nouveauuser : User){
    this.listusers.push(nouveauuser);
  }
}
