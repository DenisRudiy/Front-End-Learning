import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RegServiceService } from 'src/app/services/reg-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  newUser: User = new User();
  users!: User[];

  constructor(private regService: RegServiceService) {}

  ngOnInit(): void {
    this.regService.getUser().subscribe((user) => {
      this.users = user;
    });
  }

  onSubmit(): void {
    this.regService.createUser(this.newUser).subscribe(
      () => {
        console.log('User created successfully!');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
