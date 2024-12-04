import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Car } from './tienda.model';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss']
})

export class TiendaPage implements OnInit {
  cars: Car[] = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      price: 20000,
      imageUrl: 'https://example.com/toyota-corolla.jpg'
    },
    {
      id: 2,
      make: 'Ford',
      model: 'Focus',
      year: 2019,
      price: 18000,
      imageUrl: 'https://example.com/ford-focus.jpg'
    },
    {
      id: 3,
      make: 'Chevrolet',
      model: 'Malibu',
      year: 2021,
      price: 25000,
      imageUrl: 'https://example.com/chevrolet-malibu.jpg'
    }
  ];
  
  constructor(private router:Router,
              private aService:AuthService,
              private navController: NavController) {}
  
  ngOnInit() {}

  viewCarDetails(car: Car) {
    this.navController.navigateForward('/car-detail', {
      state: {
        car: car
      }
    });
  }
  
  buyCar(car: Car) {
    alert(`Gracias por comprar un ${car.make} ${car.model} del ${car.year}!`);
  }

  logout(){
    this.aService.logout();
    alert("Sesión ha sido cerrada")
    this.router.navigate(['/home']);
  }
}