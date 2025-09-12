import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-screen',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user-screen.html',
  styleUrl: './new-user-screen.css'
})        
export class NewUserScreen {

  newUserScreenLoginForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.newUserScreenLoginForm = this.fb.group({
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
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          newUser: this.newUserScreenLoginForm.value.newUser,
          email: this.newUserScreenLoginForm.value.email,
          password: this.newUserScreenLoginForm.value.password,
          newPassword: this.newUserScreenLoginForm.value.newPassword
        })
      });



    }

  }


