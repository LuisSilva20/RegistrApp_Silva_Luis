import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciadoGuard } from './guards/iniciado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'home-p',
    loadChildren: () => import('./pages/home-p/home.module').then( m => m.HomePageModule),
    canActivate: [IniciadoGuard]
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule),
    canActivate: [IniciadoGuard]
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule),
    canActivate: [IniciadoGuard]
  },
  {
    path: 'home-a',
    loadChildren: () => import('./pages/home-a/home-a.module').then( m => m.HomeAPageModule),
    canActivate: [IniciadoGuard]
  },
  {
    path: 'registrarse-a',
    loadChildren: () => import('./pages/registrarse-a/registrarse-a.module').then( m => m.RegistrarseAPageModule)
  },
  {
    path: 'inicio-sesion-a',
    loadChildren: () => import('./pages/inicio-sesion-a/inicio-sesion-a.module').then( m => m.InicioSesionAPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'inicio-a',
    loadChildren: () => import('./pages/inicio-a/inicio-a.module').then( m => m.InicioAPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
