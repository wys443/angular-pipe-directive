import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dateVal = new Date();
  
  constructor() { 
  }

  ngOnInit(): void {

    //string substring

    var a = "John doe";
    console.log(a.substring(2,4));
    //output: hn
  }

  // currency(inputvalue: "1500", currencyCode: "CAD", display: "", param1, param2 ){

  // }
   

}
