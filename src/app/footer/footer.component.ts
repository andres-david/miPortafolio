import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLinkedin(url: string){
    window.open(url, '_blank');
  }

  goToGithub(url: string){
    window.open(url, '_blank');
  }

  goToInsta(url: string){
    window.open(url, '_blank');
  }

  goToFacebook(url: string){
    window.open(url, '_blank');
  }

}
