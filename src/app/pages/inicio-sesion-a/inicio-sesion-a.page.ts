import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service'; 
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion-a',
  templateUrl: './inicio-sesion-a.page.html',
  styleUrls: ['./inicio-sesion-a.page.scss'],
})
export class InicioSesionAPage implements OnInit {

  userdata:any;

  usuario={
    id:0,
    username:"",
    password:"",
    role:"",
    isactive: true
  
  }
  inicioSesionForm: FormGroup;
  constructor(private builder:FormBuilder, private apiService:ApiService, 
              private router:Router, private alertController:AlertController, 
              private toastController:ToastController ) {
                this.inicioSesionForm = this.builder.group({
                'username': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
                'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(16)])})
                }

  ngOnInit() {
  }
  inicioSesion(){
    if (this.inicioSesionForm.valid){
      this.apiService.GetUserById(this.inicioSesionForm.value.username).subscribe(resp=>{ 
        this.userdata=resp;
        console.log(this.userdata);
        if (this.userdata.length>0){
          this.usuario={
            id : this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          if (this.usuario.password===this.inicioSesionForm.value.password){
            if (this.usuario.isactive){
              //iniciamos sesión del usuario 
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('userrole', this.usuario.role);
              sessionStorage.setItem('ingresado', 'true');
              //invocamos una alerta utilizando Toast
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/home-a");
            }
            else{
              this.UserInactivo();
              this.inicioSesionForm.reset();
            }
          }
          else{
            this.DatoError();
            this.inicioSesionForm.reset();
          }
        }
        else{
          this.NoExiste();
          this.inicioSesionForm.reset();
        }

      })
  }
}

async showToast(msg: any){
  const toast= await this.toastController.create({
    message:msg,
    duration: 3000
  })
  toast.present();
}

async UserInactivo(){
  const alerta = await this.alertController.create({ 
    header: 'Error..',
    message: 'Usuario inactivo, contactar a admin@admin.cl',
    buttons: ['Ok']
  });
  alerta.present();
  return;
}

async DatoError(){
  const alerta = await this.alertController.create({ 
    header: 'Error..',
    message: 'Revise sus credenciales',
    buttons: ['Ok']
  });
  alerta.present();
  return;
}

async NoExiste(){
  const alerta = await this.alertController.create({ 
    header: 'Debe registrarse..',
    message: 'Usuario no existe',
    buttons: ['Ok']
  });
  alerta.present();
  return;
}


}

