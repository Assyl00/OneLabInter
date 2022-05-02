import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location) {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  submit() {
    const { login, password } = this.loginForm.value;
    if (login === 'assyl' && password === '123') {
      localStorage.setItem('login', login);
      alert('Успешная авторизация!');
      this.location.back();
      // this.router.navigateByUrl('/home');
    } else {
      alert('Неправильный логин и/или пароль!');
    }
  }

}
