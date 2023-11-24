import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes : Componente[]=[
  {
    name:'Home',
    redirecTo: '/home',
    icon:'home-outline'
  },
  {
    name:'Perfil-De-Usuario',
    redirecTo: '/perfil',
    icon:'person-outline'
  },
  {
    name:'Asistencia',
    redirecTo: '/codigo-qr',
    icon:'book-outline'
  },
  {
    name:'Cerrar-Sesion',
    redirecTo: '/select',
    icon:'exit-outline',
  },
  ]
  nombre:any;
  constructor() {}
  
  ngOnInit() {
    this.nombre = sessionStorage.getItem('username');
  }


 
}
