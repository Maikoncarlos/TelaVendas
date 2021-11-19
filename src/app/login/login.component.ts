import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  loginError:any;
  cadastrando: any;

  constructor(
    private router: Router,
  ) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  praparandoCadastro(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }



}
