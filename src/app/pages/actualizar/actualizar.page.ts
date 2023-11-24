import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuarios ={
    id:0,
    nombre:"",
    apellidos:"",
    username:"",
    password:"",
    isactive: false
  }

  constructor(private apiService:ApiService,
              private router: Router, 
              private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.apiService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 
        console.log(resp);
        this.usuarios={
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellidos: resp[0].apellidos,
          username:resp[0].username,
          password: resp[0].password,
          isactive: resp[0].isactive
        }
      }
      
    )
  }

  ActualizarUsuario(){
    this.apiService.ActualizarUsuario(this.usuarios).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl("/perfil");
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.usuarios.username,
      buttons: ['OK']
    });
    alerta.present();
  }

}
