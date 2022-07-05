import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitLogin(){
    console.log('Hola!!')
     this.authservice.login(this.email, this.password).then( res =>{
      this.router.navigate(['/home']);
     }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  }

}
