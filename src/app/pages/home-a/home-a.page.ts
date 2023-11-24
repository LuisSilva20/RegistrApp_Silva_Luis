import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.page.html',
  styleUrls: ['./home-a.page.scss'],
})
export class HomeAPage implements OnInit {
  
 
  nombre:any;
  constructor(private router: Router, private alertController: AlertController,
              private toastController: ToastController) {this.nombre = sessionStorage.getItem('username'); }

  ngOnInit() {
  }

  async EscanearQR(){
    const titulo = 'Abriendo cámara...'
    const mensaje = 'Se abrirá la cámara para escanear el código QR'
    await this.QRalert(mensaje, titulo);

  }

  async errorToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      icon: 'alert-circle-outline'
    });

    await toast.present();
  }

  async QRalert(subhead: string, title: string){
    const alert = await this.alertController.create({
      header: title,
      subHeader: subhead,
      message: 'Imaginen ahora que mágicamente aparece un código QR',
      buttons: ['OK'],
    })
    await alert.present();
  }

}

  

