import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-screen',
  imports: [],
  templateUrl: './new-user-screen.html',
  styleUrl: './new-user-screen.css'
})        
export class NewUserScreen {

  NewUserScreenLoginForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.NewUserScreenLoginForm = this.fb.group({
      newUser: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      newPassword: ["", [Validators.required]]
    })



  }

  async onCadastro() {
      const token = localStorage.getItem("meuToken");

   let response = await fetch("https://senai-gpt-api.azurewebsites.net/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accessToken": "token"
      },
      body: JSON.stringify({
        newUser: this.NewUserScreenLoginForm.value.email,
        email: this.NewUserScreenLoginForm.value.email,
        password: this.NewUserScreenLoginForm.value.password,
        newPassword: this.NewUserScreenLoginForm.value.password
      })
    });


  }
  

  }
