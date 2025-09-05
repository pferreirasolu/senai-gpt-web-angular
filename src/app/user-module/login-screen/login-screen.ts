import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.html',
  styleUrls: ['./login-screen.css'],
  imports: [ReactiveFormsModule]
})
export class LoginScreen {
  //quando a tela iniciar


  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })

  }

  async onLoginClick() {

    console.log("Email", this.loginForm.value.email);
    console.log("Password", this.loginForm.value.password);

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      })
    });


    if (this.loginForm.value.email != "" && this.loginForm.value.password != "") {

      let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        })
      });

      if (response.status >= 200 && response.status <= 299) {
        alert("Login efetuado com sucesso! Status: " + response.status)

      } else {
        alert("Erro de login! status: " + response.status)
      }
    } else {
      alert("Por favor preencha os campos de login e senha")
    }
  }
}

