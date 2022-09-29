import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserloggedService {
  private sub = new Subject<string>();

  constructor() { }

  public getLogged() : Subject<string>{
    return this.sub;
  }
}
