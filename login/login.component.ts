import { Component } from '@angular/core';


class Login {
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login; 
  constructor() {
    this.loginObj = new Login();
  }

}
