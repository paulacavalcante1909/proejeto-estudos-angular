import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() usuario:any ="";
  @Output() evento = new EventEmitter();

  acesso:boolean = false;

  login(email,senha){

    console.log(email.value);
    if(email.value == this.usuario.email && senha.value == this.usuario.senha){
      this.acesso = true;
    }
    else{
      this.acesso == false;
      
    }
    this.evento.emit(this.acesso);
      localStorage.setItem("acesso", JSON.stringify(this.acesso));

  }
  
}


