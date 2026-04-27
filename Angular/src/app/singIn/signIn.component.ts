import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListproudactService } from '../listproudact.service';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Clients } from '../models/clients';
import { log } from 'node:console';


@Component({
  selector: 'app-signIn',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signIn.component.html'
})
export class signInComponent {
  client: Clients
  checkNumber: string
  notExists: boolean = false
  show: boolean = false
  name: string = ''
  phone: string = ''
  email: string = ''
  date: string = ''
  n: number
  nameToShow: string
  isSignedIn: boolean = false
  c: Clients = {
    clientName: '',
    id: 0,
    phoneNumber: '',
    email: '',
    birthDay: ''
  }

  signIn = new FormGroup(
    {
      fullName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', Validators.email),
      birthDay: new FormControl('', Validators.required)
    }
  )
  constructor(private productList: ListproudactService) {

  }

  checkNumberExsist(checkNumber: string) {
    this.productList.getByNumber(this.checkNumber).subscribe(
      (data) => {
        this.client = data;
        if (data != null) {
          alert("Welcome Back" + "  " + this.client.clientName);
          this.productList.id = this.client.id;
          this.productList.setName(this.client.clientName);
          this.isSignedIn = true; // המשתמש מחובר
        } else if (data == null) {
          alert("הלקוח אינו קיים במערכת, אנא הירשם!");
          this.show = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  signUp() {

    this.c.clientName = this.signIn.value.fullName!;
    this.c.phoneNumber = this.signIn.value.phoneNumber!;
    this.c.email = this.signIn.value.email!;
    this.c.birthDay = this.signIn.value.birthDay!;
    console.log(this.c);

    this.productList.addClient(this.c)
      .subscribe(
        next => {
          alert("נרשמת בהצלחה!");
          this.productList.setName(this.c.clientName);

          this.productList.id = this.c.id

          console.log(this.c.id);
        }
        ,
        error => {
          console.error("שגיאה במהלך ההרשמה:", error);
        }
      )
  };
}



