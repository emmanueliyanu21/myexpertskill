import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images here
  welcome = 'assets/welcome.png';
  logo = 'assets/logo.png'

}
