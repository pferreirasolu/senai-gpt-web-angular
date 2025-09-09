import { ChangeDetectorRef, Component } from '@angular/core';
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

successStatusMessage:string;
errorStatusMessage:string;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {

    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })

    this.successStatusMessage = "";
    this.errorStatusMessage ="";
  }



  async onLoginClick() {
    this.successStatusMessage = "";
    this.errorStatusMessage ="";

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
       this.successStatusMessage = "Login efetuado com sucesso!";

       let json = await response.json();

       console.log("JSON",json)

       let meuToken = json.accessToken;
       let meuId = json.user.id;

       localStorage.setItem("meuToken",meuToken);
       localStorage.setItem("meuId",meuId);


       window.location.href ="chat";
      } else {
        this.errorStatusMessage = "Credenciais incorretas!";
      }
    } else {
      this.errorStatusMessage = "Por favor preencha os campos de login e senha";
    }
    this.cd.detectChanges(); //forcar uma atualizacao da tela
  }
}

