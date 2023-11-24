import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios ={
    id:0,
    nombre:"",
    apellidos:"",
    username:"",
    password:"",
    isactive: false
  }

  constructor( private router: Router,
              private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsersById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsersById(usuariosID:number){
    this.apiService.BuscarUsuarioId(usuariosID).subscribe(
      (resp:any)=>{               //resp llega en formato de arreglo de un objeto 
        this.usuarios={
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellidos: resp[0].apellidos,
          username: resp[0].username,
          password: resp[0].password,
          isactive: resp[0].isactive
        }
      }
    )
  }

}
