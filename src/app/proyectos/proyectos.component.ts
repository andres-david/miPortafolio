import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToBlack(url: string){
    window.open(url, '_blank');
  }

  goToCart(url: string){
    window.open(url, '_blank');
  }

  goToGifsReact(url: string){
    window.open(url, '_blank');
  }

  goToGifsAngular(url: string){
    window.open(url, '_blank');
  }

  goToRedSocial(url: string){
    window.open(url, '_blank');
  }

  goToMaquetacion1(url: string){
    window.open(url, '_blank');
  }

  goToPokeApi(url: string){
    window.open(url, '_blank');
  }

}
