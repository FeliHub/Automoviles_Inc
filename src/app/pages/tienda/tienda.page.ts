import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss']
})

export class TiendaPage implements OnInit {
  carData: any = null;
  errorMessage: string = '';
  
  constructor(private apiService: ApiService,
              private router:Router,
              private aService:AuthService) {}
  
  ngOnInit() {
    this.getCarData();
  }
  
  getCarData() {
    this.apiService.getCarData().subscribe(
      (data) => {
        this.carData = data;
        console.log(this.carData);  // Muestra los datos en la consola
      },
      (error) => {
        this.errorMessage = 'Error al obtener los datos del vehículo.';
        console.error(error);
      }
    );
  }

  buy(vehicle: any) {
    console.log('Purchased:', vehicle);
    // Lógica adicional para manejar la compra
  }

  logout(){
    this.aService.logout();
    alert("Sesión ha sido cerrada")
    this.router.navigate(['/home']);
  }
}