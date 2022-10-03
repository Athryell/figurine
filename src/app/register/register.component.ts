import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { PasswordValidator } from '../validators/password-validator';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;
  errorForm: boolean = false;
  users: Array<User> = [];
  nomi: Array<string> = [];
  foundUser: boolean = false;
  registerFailed: boolean = false;

  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.foundUser = false;
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), PasswordValidator(/[0-9]/)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(6), PasswordValidator(/[0-9]/)])
    });

  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      this.errorForm = true;
    } else {
      if (this.loginService.getUser2(form.value.username)) {
        if (form.value.password === form.value.confirm) {
          this.cookieService.set(form.value.username, form.value.password);
          this.cookieService.set("session", form.value.username);
          this.router.navigateByUrl('/home');
        }

      }
      else {
        this.registerFailed = true;
        this.errorForm = false;
      }


    }
  }


}

