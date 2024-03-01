import { FormControl, FormGroup } from "@angular/forms";
import { Poll } from "./poll.model";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  polls: Poll[];
}

export namespace User {
  export function formGroup(user?: User) {
    return new FormGroup({
      id: new FormControl(user?.id ?? 0, { nonNullable: true }),
      name: new FormControl(user?.name ?? '', { nonNullable: true }),
      email: new FormControl(user?.email ?? '', { nonNullable: true }),
      password: new FormControl(user?.password ?? '', { nonNullable: true }),
    })
  }
}