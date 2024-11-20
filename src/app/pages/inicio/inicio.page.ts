import { Component, OnInit } from '@angular/core';
//import { ApiService } from '../api.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit{

//cars: any[] = [];

  constructor(/*private apiService: ApiService*/) {}

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


  /*
  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }
  */
}