//import { User } from 'src/app/models/user/user.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    //console.log(this.User)
  }
  @Input()
  public User!: any;
 
}

