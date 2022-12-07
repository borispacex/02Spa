import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      nombres: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      apellidos: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmarPassword: new FormControl('', [Validators.required]),
    });
  }

  registrarUser() {
    console.log(this.registroUserForm);
    this.user = this.registroUserForm.value;
    console.log('Valores de user', this.user);
    
  }

  validateControl(controlName: string) {
    return this.registroUserForm.get(controlName)?.invalid && this.registroUserForm.get(controlName)?.touched;
  }
  hasError(controlName: string, errorName: string) {
    return this.registroUserForm.get(controlName)?.hasError(errorName);
  }
  
}

