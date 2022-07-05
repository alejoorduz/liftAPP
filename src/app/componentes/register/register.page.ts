import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { auth } from 'firebase';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string
  public password1: string
  public password2: string
  public name: string
  public proyecto: string

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

OnSubmitRegister(){
  this.auth.register(this.email,this.password1,this.proyecto).then(auth=> {
    this.router.navigate(['/home'])
    console.log(this.email)
    console.log(auth)
  }).catch(err => {
    console.log(err)
  })
}

}
