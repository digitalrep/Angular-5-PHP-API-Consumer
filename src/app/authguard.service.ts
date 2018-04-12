import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthenticateService, private router: Router, private route: ActivatedRoute) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.verify().map(response => {
      if(response.code === 200) {
        return true;
      }
    }).catch(() => {
      this.router.navigate(['/login']);
      return Observable.of(false);
    });
  }

}
