import { Component, OnInit } from '@angular/core';
import { UserloggedService } from '../services/userlogged.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  displayUserIcon : Boolean = false;
  username: string = "";
  hover : boolean = false;
  constructor(private userLogged : UserloggedService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
      this.userLogged.getLogged().subscribe(
        value => {
          if(value != ""){
            this.displayUserIcon = true;
          }else{
            this.displayUserIcon = false;
          }
        },
        error => {

        }
      );
      

      if(this.cookieService.check("session")) {
        this.username = this.cookieService.get("session");
        this.userLogged.getLogged().next(this.username || "");
      }
  }

  logOut() : void {
    this.cookieService.delete("session");
    this.userLogged.getLogged().next("");
    this.router.navigateByUrl("/login");
    
  }

  click(){
    this.hover=true;

  }
}
