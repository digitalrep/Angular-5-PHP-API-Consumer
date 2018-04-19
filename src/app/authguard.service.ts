import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { Observable} from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  returnUrl: string = 'login';

  constructor(private auth: AuthenticateService, private router: Router, private route: ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.verify().map(response => {
      if(response.code === 200) {
        console.log("verify got response 200");
        return true;
      } else {
        console.log("verify did not get response 200");
        return false;
      }
    }).catch(() => {
      console.log("verify got error response");
      this.router.navigate([this.returnUrl]);
      return Observable.of(false);
    });
  }

}
