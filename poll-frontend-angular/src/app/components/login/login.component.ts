import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = new FormGroup({
    email: new FormControl('', {nonNullable: true, validators: [ Validators.required ]}),
    password: new FormControl('', {nonNullable: true, validators: [ Validators.required ]})
  });
  error = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private dialogService: MatDialog,
    private userService: UserService
  ) {}

  onSubmit() {
    this.authenticationService.login(
      this.credentials.value.email!,
      this.credentials.value.password!).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: err => {
          this.error = err.message;
          console.log(err);
        }
      });
  }

  onAdd() {
    this.dialogService.open(
      UserFormComponent,
      {
        data: {
          title: "New user",
          submitAction: (user: User) => this.userService.save(user)
        },
        width: "1024px",
        maxHeight: "80vh"
      }
    );
  }

}
