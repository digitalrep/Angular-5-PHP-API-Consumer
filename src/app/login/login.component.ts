import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticateService } from '../authenticate.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  hideWarning: boolean = true;
  returnUrl: string = 'dashboard';

  constructor(private auth: AuthenticateService, private router: Router, private route: ActivatedRoute) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.hideWarning = true;
    if(this.auth.validate(this.user, false)) {
      this.auth.login(this.user).subscribe((response) => {
        console.log(response);
        if(response.code != 200) {
          this.hideWarning = false;
        } else {
          console.log(response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate([this.returnUrl]);
        }
      });
    } else {
      this.hideWarning = false;
    }
  }

}
