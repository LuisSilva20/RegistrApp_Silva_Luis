import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { User, Users } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-registrarse-a',
  templateUrl: './registrarse-a.page.html',
  styleUrls: ['./registrarse-a.page.scss'],
})
export class RegistrarseAPage implements OnInit {

  usuario: User={
    nombre:'',
    apellidos:'',
    username:'',
    password:'',
    confirmPassword:'',
    role: '',
    isactive: true

  }

  registerForm : FormGroup;

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private router: Router, private apiservice: ApiService,
              private builder : FormBuilder
              ) {
                this.registerForm = this.builder.group({
                  'nombre': new FormControl("", [Validators.required, Validators.maxLength(15)]),
                  'apellidos': new FormControl("", [Validators.required, Validators.maxLength(25)]),
                  'username': new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
                  'confirmPassword': new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
                  'role': new FormControl("", [Validators.required])
                })
              }

  ngOnInit() {
  }
  //@ts-ignore
  async Registrarse(){

    /* TAREA PA LA CASA: VERIFICAR SI USUARIO EXISTE: INVOCAR ALERTA CON ERROR,
      SI NO EXISTE: INVOCAR ALERTA EXITOSA
    */
    console.log(this.usuario)

    if(this.usuario.password != this.usuario.confirmPassword){
      this.mostrarAlerta('ERROR', 'Las contraseñas no coinciden')
      return false
    }
    
    this.mostrarAlerta('Exito', 'Usuario creado con exito')
    
    this.apiservice.CrearUsuario(this.usuario).subscribe();
    this.usuario.nombre="";
    this.usuario.apellidos="";
    this.usuario.username="";
    this.usuario.password="";
    this.usuario.confirmPassword="";
    this.router.navigate(['inicio'])

  } 

  
  async mostrarAlerta(head: string, msg: string){
    const toast = await this.toastController.create({
      header: head,
      message: msg,
      position: 'top',
      duration: 5000
    });
    
    await toast.present();
  }

}
