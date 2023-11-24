import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Users } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  usuarios: Users[]=[];

  constructor(private usuariosService: ApiService,
              private loadingCtrl : LoadingController) { }

  ionViewWillEnter(){
  this.loadUsuarios();
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();

    this.usuariosService.listarUsuarios().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
           let listString = JSON.stringify(resp)
           this.usuarios=JSON.parse(listString)
           event?.target.complete();
           console.log(this.usuarios);
        },
        error: err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

  ngOnInit() {
  }

}
