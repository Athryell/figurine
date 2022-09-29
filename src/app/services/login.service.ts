import { Injectable, TemplateRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  toasts: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getUser() : Observable<Array<User>>{
    return this.httpClient.get<Array<User>>(environment.baseAPIURL + '/assets/users.json')
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
