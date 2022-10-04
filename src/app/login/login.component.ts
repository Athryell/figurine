import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password-validator';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserloggedService } from '../services/userlogged.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  errorForm: boolean = false;
  users: Array<User> = [];
  foundUser: boolean = false;
  loginFailed: boolean = false;
  isPasswordRevealed: boolean = false;
  

  constructor(private loginService: LoginService, private router: Router,
    private userLoggedService: UserloggedService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.foundUser = false;
    this.myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), PasswordValidator(/[0-9]/)])
   });
  }

  onSubmit(form: FormGroup){
    if(!form.valid){
      this.errorForm = true;
    } else {
      if(this.loginService.getUser(form.value.username,form.value.password)){
        this.cookieService.set("session",form.value.username);
        this.userLoggedService.getLogged().next(form.value.username);
        this.router.navigateByUrl('/home');
      }
      else {

        this.loginFailed = true;
        this.errorForm = false;
    }

  }
  }

  showDanger(dangerTpl: any) {
    this.loginService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

  togglePasswordVisibility(){
    this.isPasswordRevealed = !this.isPasswordRevealed;
  }
}
