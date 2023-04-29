import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RegServiceService } from 'src/app/services/reg-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentUser: User = new User();
  confirmedPassword!: string;
  users!: User[];
  Status = false;

  constructor(private regService: RegServiceService) {}

  ngOnInit(): void {
    this.regService.getUser().subscribe((user) => {
      this.users = user;
    });
  }

  onSubmit(): void {
    if (this.confirmedPassword === this.currentUser.password) {
      console.log('Success');
      this.Status = true;
    } else {
      console.log('Error');
    }
  }
}
