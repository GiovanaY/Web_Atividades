import { Component, PLATFORM_ID, inject } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  mensagem: String = "";
  obj: Cliente = new Cliente();
  private ehBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit(){
    this.carregar();
  }

  gravar(){
    this.mensagem = "Seu login foi realizado com sucesso!";
    if(this.ehBrowser){
      let json = JSON.stringify(this.obj);
      localStorage.setItem("login", json);
    }
  }

  carregar(){
    this.mensagem = "";
    if(this.ehBrowser){
      let json = localStorage.getItem("login");
      if(json!=null){
        this.obj = JSON.parse(json);
      }
    }
  }
}