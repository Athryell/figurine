import { Injectable, TemplateRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private username:string="";
  private password:string="";
  toasts: any[] = [];

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getUser(username:string, password:string) : boolean {
    if(this.cookieService.check(username) && (password===this.cookieService.get(username))){
      return true;
    }
    return false;
  }

  
  getUser2(username:string): boolean{
    if(this.cookieService.check(username)){
      return false;
    }
    else{
  
      return true;
    }
  }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
