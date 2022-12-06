import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registroUserForm!: FormGroup;
  user!: any;

  constructor() { }

  ngOnInit(): void {
    this.registroUserForm = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmarPassword: new FormControl(''),
    });
  }

  registrarUser() {
    console.log(this.registroUserForm);
    this.user = this.registroUserForm.value;
    console.log('Valores de user', this.user);
  }

  

}
