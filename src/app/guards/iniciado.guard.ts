import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/servicios/api.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class IniciadoGuard {
  
  constructor(private router: Router,
    private apiservice: ApiService,
    private toastcontroller: ToastController) {}

    canActivate():
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.apiservice.IsLogged()){
          this.showToast('Debe iniciar sesión');
          this.router.navigateByUrl("/inicio");
          return false;
        }
    return true;
}

async showToast(msg: any){
    const toast= await this.toastcontroller.create({
        message:msg,
        duration: 3000
      })
      toast.present();
    }
}
