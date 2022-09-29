import { Component, OnInit } from '@angular/core';
import { UserloggedService } from '../services/userlogged.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  displayUserIcon : Boolean = false;
  username: string = "";
  constructor(private userLogged : UserloggedService, private router: Router) { }

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
      

      if(localStorage.getItem("utente") != null) {
        this.username = localStorage.getItem("utente") || "";
        this.userLogged.getLogged().next(this.username || "");
      }
  }

  logOut() : void {
    localStorage.removeItem("utente");
    this.userLogged.getLogged().next("");
    this.router.navigateByUrl("/login");
    
  }

}
