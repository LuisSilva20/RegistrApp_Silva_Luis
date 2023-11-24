import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombre: any;
  constructor(private menuController: MenuController) { this.nombre = sessionStorage.getItem('username');}

  ngOnInit() {
    //this.nombre = sessionStorage.getItem('username');
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }

 
 

}
