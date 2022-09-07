import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public contacto:{name:string, email:string, message:string}

  constructor() {}

  ngOnInit(): void {
  }

  public SendMail(){
    let params = {
      from_name: this.contacto.name,
      email_id: this.contacto.email,
      message: this.contacto.message
    }

    emailjs.send('service_5f1ntm6', 'template_5mki6u3', params, 'Ew17Rgz1ai-Ye250A')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);

        let form = <HTMLFormElement>document.querySelector('#form');

        form.reset();

      }, (error) => {
        console.log(error.text);
      });

  }

  goToLinkedin(url: string){
    window.open(url, '_blank');
  }

  goToGithub(url: string){
    window.open(url, '_blank');
  }

}
