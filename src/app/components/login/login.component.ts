import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent  implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private authService:AuthService,
              private router:Router,
              private aService:AuthService,) {}

  ngOnInit() {}

  async login() {
    try{
      await this.authService.login(this.email, this.password);
      alert("Ha entrado a su cuenta");
      this.router.navigate(['/inicio']);

    }catch(error){
      alert("Ha ocurrido un error con el login:  " +error);
    }
  }//fin de Login

}