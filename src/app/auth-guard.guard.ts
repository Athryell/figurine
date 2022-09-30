import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserloggedService } from './services/userlogged.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private router: Router, private cookieService: CookieService, private userLoggedService: UserloggedService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cookieService.check("session"))
    {
      this.userLoggedService.getLogged().next(this.cookieService.get("session"));
      return true;
    }  

    return this.router.navigateByUrl('/login');
  }
  
}
