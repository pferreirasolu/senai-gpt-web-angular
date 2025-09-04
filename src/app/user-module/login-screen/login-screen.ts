import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.html',
  styleUrls: ['./login-screen.css']
})
export class LoginScreen {
  //quando a tela iniciar


  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email:["",[Validators.required]],
      password: ["",[Validators.required]]
    })
  
  }

  onLoginClick(){

    alert("Botão de login clicado.");

    console.log("Email", this.loginForm.value.email);
    console.log("Password", this.loginForm.value.password);
  }
}
