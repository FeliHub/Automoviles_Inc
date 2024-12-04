import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', //Nota: redirige a la pagina home cuando el URL está vacio
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./pages/registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'tienda',
    loadChildren: () => import('./pages/tienda/tienda.module').then( m => m.TiendaPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'servicio',
    loadChildren: () => import('./pages/servicio/servicio.module').then( m => m.ServicioPageModule),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }