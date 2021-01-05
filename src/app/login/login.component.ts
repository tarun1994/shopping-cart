import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pass:string;
  constructor(private loginService: LoginService, private routes: Router) { }

  ngOnInit() {
  }
  check():void{
    {
      var output = this.loginService.checkusernameandpassword(this.uname, this.pass);
      if(output == true)
      {
        this.routes.navigate(['/home']);
      }
      else{
          alert('Authentication Failed');
      }
  }
}
}
