import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {

  
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
  

  logo = 'assets/logo.png';
  welcome = 'assets/right-fit.png'

}
