import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name:string = '';

  user = {
    firstname:'',
    lastname: '',
    email: '',
    phonenumber: '',
    gender: '',
    country: '',
    password: '',
    confirmpassword: '',
  }
  
//   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//   let pass = group.controls.password.value;
//   let confirmPass = group.controls.confirmPass.value;

//   return pass === confirmPass ? null : { notSame: true }     
// }

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(valid){
      console.log(value);
    } else
    console.log('form is invalid');
  }
  


  // image connection
  logo = 'assets/logo.png';
  welcome = 'assets/right-fit.png'
}
