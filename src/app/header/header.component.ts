import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { 

  }

  ngOnInit(): void {
  }

  toggle(){

    console.log('Hola');

    let headerElement = document.querySelector('#header');

    let menuElement = document.querySelector('.menu');

    headerElement.classList.toggle('header--show');

    menuElement.classList.toggle('menu--show');
  }

  home(){
    this.router.navigateByUrl('');
  }

  description(){
    this.router.navigateByUrl('/curriculum');
  }

  tecnologias(){
    this.router.navigateByUrl('/tecnologias');
  }

  proyectos(){
    this.router.navigateByUrl('/proyectos');
  }

  contacto(){
    this.router.navigateByUrl('/contacto');
  }


}
