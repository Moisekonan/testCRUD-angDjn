import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from '../../users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users?: User[] ;
  count?: number = 0

  constructor(private userService: UserService) { 
   this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data.results;
      this.count = data.count;
      console.log(data)
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}