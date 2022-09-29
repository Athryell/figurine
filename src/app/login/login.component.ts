import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password-validator';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserloggedService } from '../services/userlogged.service';


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
  

  constructor(private loginService: LoginService, private router: Router,
    private userLoggedService: UserloggedService) { }

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
      this.loginService.getUser().subscribe(
        value => {
          this.users = value;
          if(this.validateUser(form)){
            //entra nella home
            localStorage.setItem("utente",form.value.username);
            this.userLoggedService.getLogged().next(form.value.username);
            this.router.navigateByUrl('/home');
            console.log("Sei dentro!")
          } else {
            // TODO: toast
            this.loginFailed = true;
            console.log("Non sei entrato...")
          }
        },
        error => {console.error('Error get user: ' + error)}
      );
      this.errorForm = false;
    }
    console.log('Valid?', form.valid)
    console.log('name: ' + form.value.username)
    console.log('pw: ' + form.value.password)
  }

  validateUser(form: FormGroup): boolean{
    this.users.forEach(user => {
      if(user.username == form.value.username && user.password == form.value.password){
        this.foundUser = true;
      }
    });
    return this.foundUser;
  }

  showDanger(dangerTpl: any) {
    this.loginService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }
}
