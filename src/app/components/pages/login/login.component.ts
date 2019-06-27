import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }
  

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(valid){
      console.log(value);
    } else
    console.log('form is invalid');
  }

  //images here
  welcome = 'assets/welcome.png';
  logo = 'assets/logo.png'

}
