import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ])
      }
    )
  }

  sendLogin(): void{
    const { email, password } = this.formLogin.value
    
    this.authService.sendCredencials(email, password)
  }
}
