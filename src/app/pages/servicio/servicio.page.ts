import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {
  car: any;

  constructor(private router:Router,
              private aService:AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  
  const navigation = this.route.routerState.snapshot;
  this.car = navigation.root.firstChild?.routeConfig?.data?.car;
  }

  logout(){
    this.aService.logout();
    alert("Sesión ha sido cerrada")
    this.router.navigate(['/home']);
  }
}
