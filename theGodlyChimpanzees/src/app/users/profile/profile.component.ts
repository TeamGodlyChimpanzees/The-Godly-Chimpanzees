import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.getCurrenUser().displayName;
  }

  someMethod() {
    console.log('Hi');
  }

}
