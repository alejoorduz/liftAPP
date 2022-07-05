import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  proyecto: string
  piso: number

  constructor(public authservice: AuthService) {}

  OnLogOut(){
    this.authservice.logout()
  }

}


