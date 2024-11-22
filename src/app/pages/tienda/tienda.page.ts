import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss']
})
export class TiendaPage implements OnInit {
  vehicles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVehicles().subscribe({
      next: (data) => {
        console.log(data); // Para verificar la respuesta
        this.vehicles = data?.data?.cars || []; // Accede al array de vehículos
      },
      error: (err) => {
        console.error('Error fetching vehicles:', err);
      }
    });
  }

  buy(vehicle: any) {
    console.log('Purchased:', vehicle);
    // Lógica adicional para manejar la compra
  }
}