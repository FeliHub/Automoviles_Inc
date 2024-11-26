import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent  implements OnInit {
  email:string = "";
  password:string = "";
  
  constructor(private authService:AuthService,
              private router:Router,
              private aService:AuthService) {}

  ngOnInit() {}
  
  async register(){
    try{
      await this.authService.register(this.email, this.password);
      alert("Usuario registrado exitosamente");

    }catch(error){
      alert("Ha ocurrido un problema con el registro:  " +error);
    }
  }//fin de Register
  
}
