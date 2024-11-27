import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit{

//cars: any[] = [];

constructor(private router:Router,
            private aService:AuthService) {}

  ngOnInit() {
    /*
    this.apiService.getCars().subscribe(
      (response) => {
        console.log(response);
        this.cars = response.cars; // Suponiendo que la respuesta contiene un array 'cars'
      },
      (error) => {
        console.error('Error al obtener los coches', error);
      }
    );
    */
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

  logout(){
    this.aService.logout();
    alert("Sesión ha sido cerrada")
    this.router.navigate(['/home']);
  }
}