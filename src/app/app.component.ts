import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:any={
    nome:"Paula Cavalcante",
    email:"paulacavalcantedeoliveira@gmail.com",
    senha:"123ab",
    bio:"Estudante",
    posts:['Post1','post2']
  }
  acesso:boolean;
onEvento(evento){
  this.acesso = evento;

}
}
