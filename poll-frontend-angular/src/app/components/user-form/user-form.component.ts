import { Component, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface userFormData {
  user?: User;
  name: string;
  email: string;
  password: string;
  submitAction: (user: Partial<User>) => Observable<void>
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  userFormGroup = User.formGroup();

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: userFormData
  ) {
    this.userFormGroup = User.formGroup(data.user);
  }

  onSubmit() {
    this.data.submitAction(this.userFormGroup.getRawValue()).subscribe(
      res => { console.log(res);  this.dialogRef.close(res); }
    );
  }

  onCancel() {
    this.dialogRef.close();
  }

}
