import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticateService } from '../authenticate.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  hideWarning: boolean = true;
  returnUrl: string = 'dashboard';

  constructor(private auth: AuthenticateService, private router: Router, private route: ActivatedRoute) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  register() {
    this.hideWarning = true;
    if(this.auth.validate(this.user, true)) {
      console.log("validated");
      this.auth.register(this.user).subscribe((response) => {
        console.log("subscribe response");
        console.log(response);
        if(response.code != 200) {
          console.log("code not 200");
          this.hideWarning = false;
        } else {
          console.log("code 200");
          console.log(response.token);
          localStorage.setItem('token', response.token);
          this.router.navigate([this.returnUrl]);
        }
      });
    } else {
      console.log("not validated");
      this.hideWarning = false;
    }
  }

}
